<template lang="html">
  <main>
    <nav class="navprincipal">
      <div class="col-lg-12">
        <input class="buscador col-lg-6" type="text" placeholder="Buscar canciones, artistas, playlists, albums" aria-label="Search" v-model="searchQuery" @keyup.enter="search">
        <button class="button buscador col-lg-5" type="button" @click="search">Buscar</button>
      </div>
    </nav>
    <section class="">
        <transition name="fade">
          <div v-if="show" id="alert" class="toast col-4 offset-4" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
              <img class="rounded mr-2" >
              <strong class="mr-auto">Resultados!</strong>
              <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="toast-body">
              {{ searchMessage }}
            </div>
          </div>
        </transition>

        <!-- Inicio Canciones -->
        <div class="Cancion1" v-if="canciones[0] && canciones[0].album.images[0]">
          <h1 class="title margenbottom20">Canciones</h1>
          <hr>
          <div class="columns is-multiline">
            <div v-if="c.album.images[0]" class="column is-one-quarter" v-for="(c,index) in canciones" :key="index">
              <pm-cancion :cancion="c"></pm-cancion>
            </div>
          </div>
        </div>
        <!-- Fin Canciones -->

        <!-- Inicio Artistas -->
        <div class="Artista1" v-if="artistas[0] && artistas[0].images[0]">
          <h1 class="title margenbottom20">Artistas</h1>
          <hr>
          <div class="columns is-multiline">
            <div v-if="a.images[0]" class="column is-one-quarter" v-for="(a,index) in artistas" :key="index">
              <pm-artista :artista="a"></pm-artista>
            </div>
          </div>
        </div>
        <!-- Fin Artistas -->

        <!-- Inicio Albums -->
        <div class="Albuns1" v-if="albums[0] && albums[0].images[0]">
          <h1 class="title margenbottom20">Albums</h1>
          <hr>
          <div class="columns is-multiline">
            <div v-if="a.images[0]" class="column is-one-quarter" v-for="(a,index) in albums" :key="index">
            <pm-album :album="a"></pm-album>
            </div>
          </div>
        </div>
        <!-- Fin Albums -->

        <!-- Inicio Playlists -->
        <div class="PlayList1" v-if="playlists[0] && playlists[0].images[0]">
          <h1 id="playlist1" class="title margenbottom20">Playlists</h1>
          <hr v-show="albums[0] && albums[0].images[0]">        
          <div class="columns is-multiline">
            <div v-if="p.images[0]" class="column is-one-quarter" v-for="(p,index) in playlists" :key="index">
              <pm-playlist :playlist="p"></pm-playlist>
            </div>
          </div>
        </div>
        <!-- Fin Playlists -->

    </section>
  </main>
</template>

<script>
import PmCancion from './Cancion.vue'
import PmArtista from './Artista.vue'
import PmAlbum from './Album.vue'
import PmPlaylist from './Playlist.vue'

const trae = require('trae')
export default {
  name: 'app', 
  components: { PmCancion, PmArtista, PmAlbum, PmPlaylist },
  data () {
    return {
      show: false,
      searchQuery: '',
      tracks: [],
      token: '',
      playlists: [],
      canciones: [],
      artistas: [],
      albums: [],
      response: [],
      total: 0
    }
  },
  computed: {
    searchMessage () {
      return `Se encontraron: ${this.total}`
    }
  },
  methods: {
    getToken (callback) {
      trae.get('http://localhost:3000/token')
        .then((res) => {
          this.token = res.data.accessToken
          callback()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    search () {
      this.canciones = []
      this.artistas = []
      this.playlists = []
      this.albums = []
      this.response = []
      this.total = 0
      this.getToken(() => {
        let url = `https://api.spotify.com/v1/search?q=${this.searchQuery}&type=album,artist,playlist,track`
        trae.get(url, {
          headers: {
            'Authorization': 'Bearer ' + this.token,
            'Content-Type': 'application/json'
          }
        })
          .then((response) => {
            console.log('3')
            console.log(response)
            this.canciones = response.data.tracks.items
            this.artistas = response.data.artists.items
            this.playlists = response.data.playlists.items
            this.albums = response.data.albums.items
            this.show = true
            this.total = response.data.tracks.total + response.data.artists.total + response.data.playlists.total + response.data.albums.total
            this.response = response
            console.log('Canciones: ')
            console.log(this.canciones)
            console.log('Artistas: ')
            console.log(this.artistas)
            console.log('Albums: ')
             console.log(this.albums)
            console.log('Playlists: ')
             console.log(this.playlists)
          })
          .catch((err) => {
            console.log('4')
            console.error(err)
          })
      })
    }
  },
  watch: {
    show () {
      if (this.show) {
        setTimeout(() => {
          this.show = false
        }, 3000
        )
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  .results{
    margin-top:  50px;
  }
  .navprincipal{
    background-color:#7887AB;
    padding:60px;
  }
  .buscador{
    height: 60px;
  }
  .Cancion1{
    background-color: #2E4272;
    padding:50px;
  }
  .Artista1{
    background-color: #806D15;
    padding:50px;
  }
  .Albuns1{
    background-color: #192955;
    padding:50px;
  }
  .PlayList1{
    background-color: #AA6C39;
    padding:50px;
  }
  .formSearch {
    width: 100%;
    margin-right: 10px;
  }
  .formMain {
    margin: 20px 0px;
  }
  
  .ArtistaTable{
    margin: 30px;
    text-align: center;
    text-decoration: underline;
    font-weight: 700;
  }
  
  .pEncontrados {
    text-align: right;
  }

  .fade-enter-active, .fade-leave-active {
    transform: scale(1);
    transition: all .8s linear;
    
  }
  .margenbottom20{
    margin-bottom:30px;
    color: white;
  }
  .margenleft-10{
    margin-left:-10px;
  }
  .fade-enter, .fade-leave-to {
    transform: scale(0);
  }
  #alert{
    opacity: 1;
  }
</style>