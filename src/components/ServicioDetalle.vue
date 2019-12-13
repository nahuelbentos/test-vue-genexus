<template>
    <div class="container" v-if="servicio">
        <div class="columns">
            <div class="column is-8">
                <div class="panel">
                    <div class="panel-heading">
                        <h1 class="title">{{ titulo }}</h1>
                    </div>
                    <div class="panel-block">
                        <div class="article-media">
                            <div class="media-content">
                                <div class="content">
                                    <div id="cabezal">
                                        <label for="cysFch">Fecha:</label>
                                        <input type="date" name="cysFch" value={{}}>
                                    </div>
                                    <div id="cuerpo">

                                    </div>
                                    <ul>
                                        <li>
                                            <strong>Fecha: </strong><span> {{ servicio.CysFch }} </span>
                                        </li>
                                        <li>
                                            <strong>Orden: </strong><span> {{ servicio.CysOrd }} </span>
                                        </li>
                                        <li>
                                            <strong>Lugar: </strong><span> {{ servicio.CysLug }} </span>
                                        </li>
                                        <li>
                                            <strong>Estado: </strong><span class="estado"> {{ estado }} </span>
                                        </li>
                                        <li>
                                            <strong>Cédula: </strong><span> {{ servicio.CysNroCi }} - {{ servicio.CysChkDig }} </span>
                                        </li>
                                        <li>
                                            <strong>Socio: </strong><span> {{ servicio.SocId }} - {{ servicio.SocNomComp }} </span>
                                        </li>
                                        <li>
                                            <strong>Último Pago: </strong><span> {{ servicio.CysMesPgo }}/{{ servicio.CysAnoPgo}} </span>
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

export default {
  data () {
    return {
      titulo:'',
      estado: '',
      servicio: {}
    }
  },
  created () {
    const SDTServicio = this.$route.params.SDTServicio
    this.servicio = SDTServicio
    this.estado = (this.servicio.CysCancel === 1 ? 'Activo' : 'Cancelado');
    if(this.servicio.CysSeccion === 'M'){
        this.titulo = 'MECANICA';
    }else if(this.servicio.CysSeccion === 'E'){        
            this.titulo = 'ELECTRICIDAD';
        }else{
            this.titulo = '';
        }
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
    .estado {
        background-color: red;
        color:white;
    }
</style>
