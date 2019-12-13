<template>
  <div class="card" v-if="artista && artista.images">
    <div class="card image">
        <figure class="image is-1by1"><img :src="artista.images[0].url" /></figure>
    </div>
    <div class="card-content">
        <div class="media">
            <div class="media-left">
                <figure class="image is-48x48"><img :src="artista.images[0].url" /></figure>
            </div>
            <div class="media-content">
                <p class="title is-6"><strong>{{ artista.name }}</strong></p>
                <p class="subtitle is-6">
                  Género: {{ artista.genres[0]}}
                  <br>
                  Cant. Seguidores: {{ artista.followers.total}}
                  <br>
                  <a :href="artista.external_urls.spotify" target="_blank"> Ver en spotify!</a>
                </p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    artista: { type: Object, required: true }
  }

}
</script>

