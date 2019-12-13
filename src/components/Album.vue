<template>
  <div class="card" v-if="album && album.images">
    <div class="card image">
        <figure class="image is-1by1"><img :src="album.images[0].url" /></figure>
    </div>
    <div class="card-content">
        <div class="media">
            <div class="media-left">
                <figure class="image is-48x48"><img :src="album.images[0].url" /></figure>
            </div>
            <div class="media-content">
                <p class="title is-6"><strong>{{ album.name }}</strong></p>
                <p class="subtitle is-6">
                  Artista: {{ album.artists[0].name}}
                  <br>
                  Año: {{ album.release_date}}
                  <br>
                  <a :href="album.external_urls.spotify" target="_blank"> Ver en spotify!</a>
                </p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    album: { type: Object, required: true }
  }

}
</script>
