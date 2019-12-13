<template>
  <div class="card" v-if="cancion && cancion.album">
    <div class="card image">
        <figure class="image is-1by1"><img :src="cancion.album.images[0].url" /></figure>
    </div>
    <div class="card-content">
        <div class="media">
            <div class="media-left">
                <figure class="image is-48x48"><img :src="cancion.album.images[0].url" /></figure>
            </div>
            <div class="media-content">
                <p class="title is-6"><strong>{{ cancion.name }}</strong></p>
                <p class="subtitle is-6">{{ cancion.artists[0].name }}</p>
            </div>
        </div>
        <div class="content"><small>{{ cancion.duration_ms | ms-to-mm }}</small>
            <nav class="level">
                <div class="level-left">
                    <audio controls>
                        <source :src="cancion.preview_url">
                    </audio>
                </div>
            </nav>
            <button class="level-item button is-success">
                <span  @click="verDetalle(cancion.id)">Ver detalle</span>
            </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    cancion: { type: Object, required: true }
  },
  methods: {
      verDetalle (id) {
          this.$router.push({name: 'cancion', params: { id } })
      }
  }

}
</script>

<style lang="scss" scoped>
    audio {
        width: 250px;
        margin-left: -10px;
    }
</style>
