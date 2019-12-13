<template>
    <div class="container" v-if="cancion && cancion.album">
        <div class="columns">
            <div class="card-content">
                <div class="media">
                    <div class="column ">
                        <figure class="media-left">
                            <p class="image"><img :src="cancion.album.images[0].url" /></p>
                                <audio controls>
                                    <source :src="cancion.preview_url">
                                </audio>
                        </figure>
                    </div>
                </div>
            </div>
            <div class="column is-8">
                <div class="panel">
                    <div class="panel-heading">
                        <h1 class="title">{{ cancion.name }}</h1>
                    </div>
                    <div class="panel-block">
                        <div class="article-media">
                            <div class="media-content">
                                <div class="content">
                                    <ul>
                                        <li>
                                            <strong>Artista: </strong><span> {{ cancion.artists[0].name }} </span>
                                        </li>
                                        <li>
                                            <strong>Album: </strong><span> {{ cancion.album.name }} </span>
                                        </li>
                                        <li>
                                            <strong>Duración: </strong><span> {{ cancion.duration_ms | ms-to-mm }} </span>
                                        </li>
                                        <li>
                                            <strong>Fecha de creación: </strong><span> {{ cancion.album.release_date }} </span>
                                        </li>
                                        <li>
                                            <strong>Número de Canción : </strong><span> {{ cancion.track_number }} </span>
                                        </li>
                                        <li>
                                            <strong>Número de Disco : </strong><span> {{ cancion.disc_number }} </span>
                                        </li>
                                        <li>
                                            <strong>Popularidad : </strong><span> {{ cancion.popularity }} </span>
                                        </li>
                                        <li>
                                            <a :href="cancion.external_urls.spotify" target="_blank"> <strong>Ver en Spotify! </strong></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

const trae = require('trae')
export default {
  data () {
    return {
      token: '',
      cancion: {}
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
    }
  },
  created () {
    const id = this.$route.params.id
    this.cancion = {}
    trae.get('http://localhost:3000/token')
        .then((res) => {
            trae.get(`https://api.spotify.com/v1/tracks/${id}`, {
                headers: {
                'Authorization': 'Bearer ' + res.data.accessToken,
                'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                console.log('3')
                console.log(response)
                this.cancion = response.data
                })
                .catch((err) => {
                console.log('4')
                console.error(err)
                })
        })
    }

}

</script>

<style lang="scss" scoped>
    audio {
        width: 250px;
        margin-left: -10px;
    }
    .container {
        margin: 20px;
    }
</style>
