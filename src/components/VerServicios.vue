<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <label for="fecha" class="label">Fecha:</label>
        <div class="control">
          <input name="fecha" type="date" class="input" placeholder="Fecha" v-model="fecha" />
        </div>
      </div>
    </div>
    <div class="columns is-mobile">
      <div class="column">
        <button
          type="button"
          class="button is-link is-outlined"
          @click="verServicios"
        >Ver servicios!</button>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="box">
          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th>Box</th>
                <th>Fecha</th>
                <th>Orden</th>
                <th>Socio</th>
                <th>Marca</th>
                <th>Matrícula</th>
                <th>Llego</th>
                <th>Inicio</th>
                <th>
                  <abbr title="Funcionario">Func.</abbr>
                </th>
                <th>Sección</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(s,index) in Servicios" :key="index">
                <td>
                  <button class="button" @click="abmServicio(s.CysOrd,s.CysFch,s.CysLug,'UPD')">
                    <i class="fas fa-pencil-alt"></i>
                  </button>
                  <button class="button" @click="abmServicio(s.CysOrd,s.CysFch,s.CysLug,'DLT')">
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
                <td>{{s.CysBox}}</td>
                <td>{{s.CysFch}}</td>
                <td>{{s.CysOrd}}</td>
                <td>{{s.SocId}}</td>
                <td>{{s.CysMar}}</td>
                <td>{{s.CysMat}}</td>
                <td>
                  {{s.CysHraLle | string-to-time}}
                </td>
                <td>{{s.CysHraIni | string-to-time}}</td>
                <td>{{s.CyfFunId}}</td>
                <td>{{s.CysSeccion === "M" ? "MECANICA" : "ELECTRICIDAD"}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const trae = require("trae");

export default {
  data() {
    return {
      todos: null,
      fecha: null,
      cysLug: "",
      modo: "",
      cysFch: null,
      cysOrd: 0,
      Servicios: {}
    };
  },
  mounted() {
    console.log("Hola mundo desde mounted");
    let today = new Date();
    getServicios(today);
  },
  methods: {
    consumirWS() {
      console.log("hola mundo desde consumirWS");
      this.getSDTServicios();
    },
    verServicios() {
      this.getServicios(this.fecha);
    },
    goABMServicio() {
      this.abmServicio(this.cysOrd, this.cysFch, this.cysLug, this.modo);
    },
    abmServicio(cysOrd, cysFch, cysLug, modo) {
      this.$router.push({
        name: "abmservicios",
        params: { cysOrd, cysFch, cysLug, modo }
      });
    },
    getServicios(fecha) {
      console.log("hola mundo desde getSDTServicios");
      trae
        .get(`http://localhost:3000/obtenerServicios?Fecha=${fecha}`)
        .then(res => {
          console.log(res.data);
          this.Servicios = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>