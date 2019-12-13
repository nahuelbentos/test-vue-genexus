<template>
  <div class="columns" style="margin: 10px 25px;">
    <div class="column">
      <article class="message is-info box">
        <div class="message-header">
          <h2> {{ titulo }} </h2>
        </div>
        <div class="message-body field">
          <!-- Primer fila de datos - [start] -->
          <div class="columns">
            <div class="column">
              <label for="cysFecha" class="label">Fecha:</label>
              <div class="control">
                <input name="cysFecha" type="date" class="input" placeholder="Fecha" v-model="servicio.CysFecha"/>
              </div>
            </div>
            <div class="column">
              <label for="cysOrd" class="label">Orden:</label>
              <div class="control">
                <input name="cysOrd" type="text" class="input" placeholder="Orden" v-model="servicio.CysOrd"/>
              </div>
            </div>
            <div class="column">
              <label for="cyTpoClie" class="label">Procedencia:</label>
              <div class="control">
                <input name="cyTpoClie" type="text" class="input" placeholder="Procedencia" v-model="servicio.CyTpoClie"/>
              </div>
            </div>
            <div class="column">
              <label for="cysCancel" class="label">Estado:</label>
              <div class="control">
                <input name="cysCancel" id="cysCancel" type="text" v-bind:class="classEstado" placeholder="Estado"  v-model="estado"/>
              </div>
            </div>
          </div>
          
          <!-- Primer fila de datos - [end] -->
          
          <!-- Segunda fila de datos - [start] -->
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
                    <select
                      name="tpoAfiliacion"
                      id="tpoAfiliacion"
                      v-model="servicio.CysTpoAfi"
                      class="allWidth100"
                    >
                      <option value="SV">Socio Vehículo</option>
                      <option value="S">Socio Anterior</option>
                      <option value="SP">Socio Persona</option>
                      <option value="SPV">Socio Mixto</option>
                      <option value="SO">Socio Oficina</option>
                      <option value="ST">Socio Temporal</option>
                      <option value="SB">Socio Básico</option>
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
                  <i class="fa fa-car"></i>
                </span>
              </div>
            </div>
            <div class="column is-2">
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
          <!-- Segunda fila de datos - [end] -->

          <!-- Tercer fila de datos - [start] -->
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
                    <input
                      type="text"
                      class="input"
                      id="texto"
                      name="texto"
                      v-model="servicio.EspDesc"
                    />
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
                      <option value="S">Suscriptor</option>
                      <option value="A">Activo</option>
                      <option value="V">Vitalicio</option>
                      <option value="O">Oficina</option>
                      <option value="H">Honorario</option>
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
                      <option value="T">Titular</option>
                      <option value="C">Conyuge</option>
                      <option value="H">Hijos</option>
                      <option value="O">Otros</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Tercera fila de datos - [end] -->

          <!-- Cuarta fila de datos - [start] -->
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
          <!-- Cuarta fila de datos - [end] -->

          <!-- Quinta fila de datos - [start] -->
          <div class="columns">
            <div class="column">
              <label for="marca" class="label">Marca</label>
              <div class="control">
                <input type="text" class="input" id="marca" name="marca" v-model="servicio.CysMar" />
              </div>
            </div>
            <div class="column">
              <label for="matricula" class="label">Matrícula</label>
              <div class="control">
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
              <div class="control">
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
          <!-- Quinta fila de datos - [end] -->

          <!-- Sexta fila de datos - [start] -->
          <div class="columns">
            <div class="column">
              <label for="horaLlegada" class="label">Hora Llegada</label>
              <div class="control">
                <input type="time" class="input" id="horaLlegada" name="horaLlegada" v-model="servicio.CysHraLle" />
              </div>
            </div>
            <div class="column">
              <label for="movilEntrada" class="label">Móvil Entrada</label>
              <div class="control">
                <input
                  type="text"
                  class="input"
                  id="movilEntrada"
                  name="movilEntrada"
                  v-model="servicio.CysMEx1"
                />
              </div>
            </div>
            <div class="column">
              <label for="movilNro" class="label">Número</label>
              <div class="control">
                <input
                  type="number"
                  class="input"
                  id="movilNro"
                  name="movilNro"
                  v-model="servicio.CysMov1"
                />
              </div>
            </div>
            <div class="column is-6">
              <label for="fallaDeclarada" class="label">Falla Declarada</label>
              <div class="control has-icons-left">
                <input
                  type="text"
                  class="input"
                  id="fallaDeclarada"
                  name="fallaDeclarada"
                  v-model="servicio.CysFalla"
                />                
                <span class="icon is-small is-left">
                  <i class="fa fa-car-crash"></i>
                </span>
              </div>
            </div>
          </div>
          <!-- Sexta fila de datos - [end] -->          

          <!-- Septima fila de datos - [start] -->
          <div class="columns">
            <div class="column is-4">
              <label for="fchIni" class="label">Inicio</label>
              
              <div class="columns">
                <div class="column">
                  <div class="control">
                    <input type="date" class="input" id="fchIni" name="fchIni" v-model="servicio.cysFch" />
                  </div>
                </div>
                <div class="column">
                  <div class="control">
                    <input
                      type="time"
                      class="input"
                      id="hraIni"
                      name="hraIni"
                      v-model="servicio.CysHraIni"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-6">
              <label for="CyfFunId" class="label">Funcionario</label>              
              <div class="columns">
                <div class="column padding-right0">
                  <div class="control">
                    <input
                      type="number"
                      class="input"
                      id="CyfFunId"
                      name="CyfFunId"
                      v-model="servicio.CyfFunId"
                    />
                  </div>
                </div>                
                <div class="column is-10 padding-left5">
                  <div class="control">
                    <input
                      type="text"
                      class="input"
                      id="CyfFunNom"
                      name="CyfFunNom"
                      v-model="servicio.CyfFunNom"
                    />
                  </div>
                </div>
              </div>
            </div>            
            <div class="column padding-left5">
              <label for="cysBox" class="label">Box</label>   
              <div class="control">
                <input
                  type="number"
                  class="input"
                  id="cysBox"
                  name="cysBox"
                  v-model="servicio.CysBox"
                />
              </div>
            </div> 
          </div>
          <!-- Septima fila de datos - [end] -->
          

          <!-- Octava fila de datos - [start] -->
          <div class="columns">
            <div class="column is-6">
              <div class="columns">
                <div class="column is-4">
                  <label for="horaFin" class="label">Fin</label>
                  <div class="control">
                    <input type="time" class="input" id="horaFin" name="horaFin" v-model="servicio.cysFch" />
                  </div>
                </div>
                <div class="column is-6">
                  <label for="CysMEx2" class="label">Móvil Salida</label>   
                  <div class="control">
                    <input
                      type="number"
                      class="input"
                      id="CysMEx2"
                      name="CysMEx2"
                      v-model="servicio.CysMEx2"
                    />
                  </div>
                </div>                         
                <div class="column is-10">
                  <label for="CysMov2" class="label">Número</label>   
                  <div class="control">
                    <input
                      type="text"
                      class="input"
                      id="CysMov2"
                      name="CysMov2"
                      v-model="servicio.CysMov2"
                    />
                  </div>
                </div>      
              </div>
            </div>
          </div>  
          <!-- Octava fila de datos - [end] -->
          
          <!-- Novena fila de datos - [start] -->
          
          <div class="columns">
                    
            <div class="container">           
              <div class="column is-12">
                <label for="cysObs" class="label">Observaciones</label>   
                <div class="control">
                  <input
                    type="class"
                    class="input"
                    id="cysObs"
                    name="cysObs"
                    v-model="servicio.CysObs"
                  />
                </div>
              </div>
              
              <div class="column">  
                <div class="control">
                  <textarea
                    type="class"
                    class="textarea"
                    id="cysObs2"
                    name="cysObs2"
                    v-model="servicio.CysObs2"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <!-- Novena fila de datos - [end] -->
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
      estado: "input",
      classEstado: "",
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
        
        this.estado = this.servicio.CysCancel === 1 ? "Activo" : "Cancelado";
        this.classEstado = this.servicio.CysCancel === 1 ? "input Activo" : "input Cancelado";
        console.log(this.servicio.CysSeccion)
        if (this.servicio.CysSeccion === "M") {
          this.titulo = "MECANICA";
        } else if (this.servicio.CysSeccion === "E") {
          this.titulo = "ELECTRICIDAD";
        } else {
          this.titulo = "";
        }
      })
      .catch(err => {
        console.log(err);
      });

  },
  methods: {
    validoMes(id) {
      console.log("Valido mes");
      if (
        (this.servicio.CysMesPgo < 1 || this.servicio.CysMesPgo > 12) &&
        this.validMes === false
      ) {
        console.log(id);
        let filId = '"' + id + '"';
        console.log(filId);
        console.log(document.getElementById(id));
        document.getElementById(id).focus();
        alert("Mes invalido, verifique");
        this.validMes = true;
        //document.getElementById(filId).focus();
      } else {
        this.validMes = false;
      }
    },
    validoAnio(id) {
      console.log("Valido anio");
      if (this.servicio.CysAnoPgo < 1900 && this.validAnio === false) {
        let filId = '"' + id + '"';
        document.getElementById(id).focus();
        alert("Año invalido, verifique");
        this.validAnio = true;
      } else {
        this.validAnio = false;
      }
    },
    validoDigitCheck(id) {
      console.log("Valido DigitCheck");
      if (
        (this.servicio.CysChkDig < 0 || this.servicio.CysChkDig > 9) &&
        this.validDigitCheck === false
      ) {
        let filId = '"' + id + '"';
        document.getElementById(id).focus();
        alert("Digito Verificador invalido, verifique");
        this.validDigitCheck = true;
      } else {
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
.Cancelado {
  color: white;
  background-color: red;
}

.Activo{
  color: white;
  background-color: green;

}
#update {
  color: white;
}
.padding-left5 {
  padding-left: 5px;
}

.padding-right0 {
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