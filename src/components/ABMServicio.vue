<template>
  <div class="columns" style="margin: 10px 25px;">
    <div class="column">
      <article class="message is-info">
        <div class="message-header">
          <h2>{{titulo}}</h2>
        </div>
        <div class="message-body field">
          <!-- Primer fila de datos - [start] -->
          <div class="columns">
            <div class="column">
              <label for="nombre" class="label">Nombre:</label>
              <div class="control">
                <input type="text" class="input" placeholder="Nombre completo" />
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <label for="cedula" class="label">Cédula:</label>
              <div class="columns">
                <div class="column is-8 padding-right0">
                  <div class="control has-icons-left">
                    <input
                      type="number"
                      class="input"
                      id="cedula"
                      name="cedula"
                      placeholder="Ingrese su cédula de identidad"
                      v-model="servicio.CysNroCi"
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>
                </div>
                <div class="column is-4 padding-left5">
                  <input
                    type="number"
                    class="input"
                    id="chkDig"
                    name="chkDig"
                    v-model="servicio.CysChkDig"
                    @blur="validoDigitCheck('chkDig')"
                  />
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label" for="tpoAfiliacion">Tipo de Afiliación</label>
                <div class="control">
                  <div class="select width100Porcent">
                    <select name="tpoAfiliacion" id="tpoAfiliacion" v-model="servicio.CysTpoAfi" 
                      class="allWidth100">
                      <option value="Socio Vehículo" >Socio Vehículo</option>
                      <option value="Socio Anterior">Socio Anterior</option>
                      <option value="Socio Persona">Socio Persona</option>
                      <option value="Socio Mixto">Socio Mixto</option>
                      <option value="Socio Oficina">Socio Oficina</option>
                      <option value="Socio Temporal">Socio Temporal</option>
                      <option value="Socio Básico">Socio Básico</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <label for="tpoVehiculo" class="label">Tipo de Vehículo:</label>
              <div class="control has-icons-left">
                <input
                  type="text"
                  class="input"
                  id="tpoVehiculo"
                  name="tpoVehiculo"
                  placeholder="Ingrese su tipo de vehículo"
                  v-model="servicio.CysTiVeId"
                />
                <span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>
            <div class="column is-2 ">
              <label for="ultPago" class="label">Último Pago:</label>
              <div class="columns">
                <div class="column padding-right0">
                  <div class="control">
                    <input
                      type="number"
                      class="input"
                      id="ultPago"
                      name="ultPago"
                      placeholder="MM"
                      v-model="servicio.CysMesPgo"
                      @blur="validoMes('ultPago')"
                    />
                  </div>              
                </div>
                <div class="column padding-left5">
                  <div class="control">
                    <input
                      type="number"
                      class="input"
                      id="ultPagoAnio"
                      name="ultPagoanio"
                      placeholder="AAAA"
                      v-model="servicio.CysAnoPgo"
                      @blur="validoAnio('ultPagoAnio')"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Primer fila de datos - [end] -->

          <!-- Segunda fila de datos - [start] -->
          <div class="columns">
            <div class="column is-6">
              <label for="socio" class="label">Socio</label>
              <div class="columns">
                <div class="column is-4" style="padding-right: 0px">
                  <div class="control has-icons-left">
                    <input
                      type="number"
                      class="input"
                      id="socio"
                      name="socio"
                      placeholder="Ingrese número de socio"
                      v-model="servicio.SocId"
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>
                </div>
                <div class="column is-8" style="padding-left: 5px">
                  <div class="control">
                    <input type="text" class="input" id="texto" name="texto" 
                      v-model="servicio.EspDesc"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-3">
              <div class="field">
                <label class="label" for="categoria">Categoría</label>
                <div class="control">
                  <div class="select width100Porcent">
                    <select
                      name="categoria"
                      id="categoria"
                      class="allWidth100"
                      v-model="servicio.CysCat"
                    >
                      <option value="Suscriptor">Suscriptor</option>
                      <option value="Activo">Activo</option>
                      <option value="Vitalicio">Vitalicio</option>
                      <option value="Oficina">Oficina</option>
                      <option value="Honorario">Honorario</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-3">
              <div class="field">
                <label class="label" for="atencion">Atención</label>
                <div class="control">
                  <div class="select width100Porcent">
                    <select
                      name="atencion"
                      id="atencion"
                      class="allWidth100"
                      v-model="servicio.CysFam"
                    >
                      <option value="Titular">Titular</option>
                      <option value="Conyuge">Conyuge</option>
                      <option value="Hijos">Hijos</option>
                      <option value="Otros">Otros</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Segunda fila de datos - [end] -->

          <!-- Tercera fila de datos - [start] -->
          <div class="columns">
            <div class="column">
              <label for="nombre" class="label">Nombre</label>
              <div class="control has-icons-left">
                <input
                  type="text"
                  class="input"
                  id="nombre"
                  name="nombre"
                  placeholder="Ingrese el nombre"
                  v-model="servicio.CysNom"
                />
                <span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>
            <div class="column">
              <label for="apellido1" class="label">Primer Apellido</label>
              <div class="control has-icons-left">
                <input
                  type="text"
                  class="input"
                  id="apellido1"
                  name="apellido1"
                  v-model="servicio.CysApe1"
                />
                <span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>
            <div class="column">
              <label for="apellido2" class="label">Segundo Apellido</label>
              <div class="control has-icons-left">
                <input
                  type="text"
                  class="input"
                  id="apellido2"
                  name="apellido2"
                  v-model="servicio.CysApe2"
                />
                <span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>
          </div>
          <!-- Tercera fila de datos - [end] -->

          <!-- Cuarta fila de datos - [start] -->
          <div class="columns">
            <div class="column">
              <label for="marca" class="label">Marca</label>
              <div class="control">
                <input type="text" class="input" id="marca" name="marca" v-model="servicio.CysMar" />
              </div>
            </div>
            <div class="column">
              <label for="matricula" class="label">Matrícula</label>
              <div class="control has-icons-left">
                <input
                  type="text"
                  class="input"
                  id="matricula"
                  name="matricula"
                  v-model="servicio.CysMat"
                />
              </div>
            </div>
            <div class="column">
              <label for="modelo" class="label">Modelo</label>
              <div class="control has-icons-left">
                <input
                  type="text"
                  class="input"
                  id="modelo"
                  name="modelo"
                  v-model="servicio.CysMod"
                />
              </div>
            </div>
          </div>
          <!-- Cuarta fila de datos - [end] -->
          <div class="columns">
            <div class="column is-4 is-offset-4" id="update">
              <a class="button is-info width100Porcent" @click="update">
                <span class="icon">
                  <i class="fa fa-save"></i>
                </span>
                <span>Modificar</span>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
const trae = require("trae");
export default {
  data() {
    return {
      titulo: "",
      validMes: false,
      validAnio: false,
      validDigitCheck: false,
      modo: "",
      cysOrd: 0,
      cysFch: "",
      cysLug: "",
      estado: "",
      servicio: {}
    };
  },
  created() {
    console.log("Estoy en ABMServicio.vue, los paramteros son:");

    console.log(`Modo: ${this.$route.params}`);
    this.modo = this.$route.params.modo;
    this.cysOrd = this.$route.params.cysOrd;
    this.cysFch = this.$route.params.cysFch;
    this.cysLug = this.$route.params.cysLug;
    console.log(`Modo: ${this.modo}`);
    console.log(`cysOrd: ${this.cysOrd}`);
    console.log(`cysFch: ${this.cysFch}`);
    console.log(`cysFch: ${this.cysFch}`);

    console.log("Estoy en ABMServicio.vue, los paramteros son:");
    trae
      .get(
        `http://localhost:3000/obtenerSDTServicios?cysLug=${this.cysLug}&date=${this.cysFch}&cysOrd=${this.cysOrd}`
      )
      .then(res => {
        this.servicio = res.data;
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    this.estado = this.servicio.CysCancel === 1 ? "Activo" : "Cancelado";
    if (this.servicio.CysSeccion === "M") {
      this.titulo = "MECANICA";
    } else if (this.servicio.CysSeccion === "E") {
      this.titulo = "ELECTRICIDAD";
    } else {
      this.titulo = "";
    }
  },
  methods: {
    validoMes(id) {
      console.log('Valido mes');
      if((this.servicio.CysMesPgo < 1 || this.servicio.CysMesPgo > 12) && this.validMes === false ){
        
        console.log(id);
        let filId = '"' + id + '"'; 
        console.log(filId);
        console.log(document.getElementById(id));
        document.getElementById(id).focus();
        alert("Mes invalido, verifique");
        this.validMes = true;
        //document.getElementById(filId).focus();
      }else{
        this.validMes = false;
      }
    },
    validoAnio(id) {
      console.log('Valido anio');
      if(this.servicio.CysAnoPgo < 1900 && this.validAnio === false ){
        let filId = '"' + id + '"'
        document.getElementById(id).focus();
        alert("Año invalido, verifique");
        this.validAnio = true;
      }else{
        this.validAnio = false;
      }
    },
    validoDigitCheck(id){
      console.log('Valido DigitCheck');
      if((this.servicio.CysChkDig < 0 || this.servicio.CysChkDig > 9)  && this.validDigitCheck === false ){
        let filId = '"' + id + '"'
        document.getElementById(id).focus();
        alert("Digito Verificador invalido, verifique");
        this.validDigitCheck = true;
      }else{
        this.validDigitCheck = false;
      }
    },
    update() {
      console.log("==============================");
      console.log("Parameters: ");
      console.log(this.modo);
      //console.log(this.servicio);

      let SDTServicios = JSON.stringify(this.servicio);
      console.log(SDTServicios);
      console.log("==============================");
      trae
        .get(
          `http://localhost:3000/executeABMServicios?Modo=${this.modo}&servicio=${SDTServicios}`
        )
        .then(res => {
          console.log("==============================");
          console.log("Success!!!!");
          console.log(res.data);
          alert(res.data.Descripcion);

          console.log("==============================");
        })
        .catch(err => {
          console.log("==============================");
          console.log("Failed!!:((");
          console.log(err);
          console.log("==============================");
        });
    }
  }
};
</script>

<style scoped>

#update {
  color: white;
}
.padding-left5{
  padding-left: 5px;
}

.padding-right0{
  padding-right: 0px;
}

.width70 {
  width: 70px;
}

.width100Porcent {
  width: 100%;
}
.allWidth100 {
  width: 100%;
  max-width: 100%;
  min-width: 100%;
}
#save {
  width: 100%;
}
[type="checkbox"]:not(:checked) + label:after,
[type="checkbox"]:checked + label:after {
  content: "✔";
  position: absolute;
  top: 0.1em;
  left: 0.3em;
  font-size: 1.3em;
  line-height: 0.8;
  color: #09ad7e;
  transition: all 0.2s;
}

[type="checkbox"]:not(:checked) + label:after {
  opacity: 0;
  transform: scale(0);
}
[type="checkbox"]:checked + label:after {
  opacity: 1;
  transform: scale(1);
}
[type="checkbox"]:not(:checked) + label:before,
[type="checkbox"]:checked + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 1.25em;
  height: 1.25em;
  border: 2px solid #ccc;
  background: #fff;
  border-radius: 4px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>