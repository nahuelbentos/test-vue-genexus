<template lang="html">
  <div id="app">
    <pm-header></pm-header>
    <router-view></router-view>
    <pm-footer></pm-footer>
  </div>
</template>

<script>
import PmFooter from './components/layout/Footer.vue'
import PmHeader from './components/layout/Header.vue'

const trae = require('trae')
export default {
  name: 'app', 
  components: { PmFooter, PmHeader }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .results{
    margin-top:  50px;
  }
  .navprincipal{
    background-color:#7887AB;
    padding:60px;
  }
  .buscador{
    height: 60px;
  }
  .Cancion1{
    background-color: #2E4272;
    padding:50px;
  }
  .Artista1{
    background-color: #806D15;
    padding:50px;
  }
  .Albuns1{
	background-color: #192955;
    padding:50px;
  }
  .PlayList1{
    background-color: #AA6C39;
    padding:50px;
  }
  .columns{
    display: block;
  }
  .formSearch {
    width: 100%;
    margin-right: 10px;
  }
  .formMain {
    margin: 20px 0px;
  }
  
  .ArtistaTable{
    margin: 30px;
    text-align: center;
    text-decoration: underline;
    font-weight: 700;
  }
  
  .pEncontrados {
    text-align: right;
  }

  .fade-enter-active, .fade-leave-active {
    transform: scale(1);
    transition: all .8s linear;
    
  }
  .margenbottom20{
    margin-bottom:30px;
    color: white;
  }
  .margenleft-10{
    margin-left:-10px;
  }
  .fade-enter, .fade-leave-to {
    transform: scale(0);
  }
  #alert{
    opacity: 1;
  }
</style>