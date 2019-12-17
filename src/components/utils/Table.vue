<template>
  <table class="table">
  <thead>
    <tr>
      <th>Box</th>
      <th>Fecha</th>
      <th>Orden</th>
      <th>Socio</th>
      <th>Marca</th>
      <th>Matrícula</th>
      <th>Llego</th>
      <th>Inicio</th>
      <th>Funcionario</th>
      <th>Seccion</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
      </td>
      <td>38</td>
      <td>23</td>
      <td>12</td>
      <td>3</td>
      <td>68</td>
      <td>36</td>
      <td>+32</td>
      <td>81</td>
      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
    </tr>    
  </tbody>
</table>
</template>

<script>
const trae = require('trae')
export default {
  data() {
    return {
      fecha: null,
      sortBy: "age",
      sortDesc: false,
      fields: [
        { key: "CysBox", sortable: true },
        { key: "CysFch", sortable: true },
        { key: "CysOrd", sortable: true },
        { key: "SocId", sortable: true },
        { key: "CysMar", sortable: true },
        { key: "CysMat", sortable: true },
        { key: "CysHraLle", sortable: true },
        { key: "CysHraIni", sortable: true },
        { key: "CyfFunId", sortable: true },
        { key: "CysSeccion", sortable: true }
      ],
      items: [
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald"
        },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" }
      ]
    };
  },
  created() {
    console.log("Estoy en ABMServicio.vue, los paramteros son:");

    console.log(`Modo: ${this.$route.params}`);
    this.fecha = this.$route.params.fecha;
    console.log(`fecha: ${this.fecha}`);
    trae
      .get(`http://localhost:3000/obtenerServicios?Fecha=${this.fecha}`)
      .then(res => {
        this.items = res.data;
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>