<template>
  <div class="card" v-if="playlist && playlist.images">
    <div class="card image">
        <figure class="image is-1by1"><img :src="playlist.images[0].url" /></figure>
    </div>
    <div class="card-content">
        <div class="media">
            <div class="media-left">
                <figure class="image is-48x48"><img :src="playlist.images[0].url" /></figure>
            </div>
            <div class="media-content">
                <p class="title is-6"><strong>{{ playlist.name }}</strong></p>
                <p class="subtitle is-6">
                  Creador: {{ playlist.owner.display_name}}
                  <br>
                  Cant. Canciones: {{ playlist.tracks.total}}
                  <br>
                  <a :href="playlist.external_urls.spotify" target="_blank"> Ver en spotify!</a>
                </p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    playlist: { type: Object, required: true }
  }

}
</script>
