<template>
  <div class="container">
    <div class="columns">     
      <div class="row col-6 offset-3">
        <h1 class="title">Aca vamos a consumir la API de GeneXus</h1>
          <span class="subtitle"> Las variables son: </span>
          <div class="content">
            <ul>
              <li>
                  <label for="CysLug"> Lugar</label>
                  <input type="text" id="CysLug" class="input is-hovered" v-model="cysLug"/>
              </li>
              <li>
                  <label for="Date"> Fecha</label>
                  <input type="date" id="Date" class="input is-hovered" v-model="cysFch"/>
              </li>
              <li>
                  <label for="CysOrd"> Orden</label>
                  <input type="number" id="CysOrd" class="input is-hovered" v-model="cysOrd"/>
              </li>
              <li>
                  <label for="Modo"> Modo</label>
                  <input type="text" id="Modo" class="input is-hovered" v-model="modo"/>
              </li>
            </ul>
            <button class="button is-link is-outlined" type="button" @click="verServicios">Ver servicios!</button>
            <button class="button is-link is-outlined" type="button" @click="consumirWS">Consumir WS!</button>
            <button class="button is-link is-outlined" type="button" @click="goABMServicio">ir a ABMServicio!</button>
          </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    margin: 20px;
  }
</style>

<script>
import axios from 'axios'
const trae = require('trae')

export default {
   data() {
     return {
       todos: null,
       cysLug: '',
       modo: '',
       cysFch: null,
       cysOrd:0,
       SDTServicios: {}
     }
   },
   mounted() {
     console.log('Hola mundo desde mounted');
     this.getTodos();
   },
   methods: {
      getTodos(){
        console.log('hola papei desde getTodos');
        // axios
        //   .post('http://192.1.0.71/ACU_Web.NetEnvironment/rest/wsObtenerSDTServicios')
        //   .then( response  => {
        //       console.log(response)
        //   })
        //   .catch( err => console.log(err))
      },
      verServicios(){
        console.log('hola mundo desde consumirWS');
        this.$router.push({name: 'verservicios', params: { } })
        
      },
      consumirWS(){
        console.log('hola mundo desde consumirWS');
        this.getSDTServicios (); 
        
      },
      goABMServicio () {
        this.abmServicio(this.cysOrd, this.cysFch, this.cysLug, this.modo);
      },
      verDetalle (SDTServicio) {
          this.$router.push({name: 'servicio', params: { SDTServicio } })
      },      
      abmServicio (cysOrd, cysFch, cysLug, modo) {
          this.$router.push({name: 'abmservicios', params: { cysOrd, cysFch, cysLug, modo } })
      },      
      getSDTServicios () {
        console.log('hola mundo desde getSDTServicios');
        trae.get(`http://localhost:3000/obtenerSDTServicios?cysLug=${this.cysLug}&date=${this.cysFch}&cysOrd=${this.cysOrd}`)
          .then((res) => {
            this.SDTServicios = res.data
            console.log(res.data)
            this.verDetalle(this.SDTServicios)
          })
          .catch((err) => {
            console.log(err)
          })
    }
  }
}
</script>