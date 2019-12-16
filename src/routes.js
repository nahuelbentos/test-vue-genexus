import Buscador from './components/Buscador.vue'
import About from './components/About.vue'
import CancionDetalle from './components/CancionDetalle.vue'
import ServicioDetalle from './components/ServicioDetalle.vue'
import ABMServicio from './components/ABMServicio.vue'
import VerServicios from './components/VerServicios.vue'

//{ path: '/abmservicios/:cysOrd/:cysFch/:cysLug', component: ABMServicio, name: 'abmservicios' },
const routes = [
  { path: '/', component: Buscador, name: 'buscar' },
  { path: '/about', component: About, name: 'about' },
  { path: '/verservicios', component: VerServicios, name: 'verservicios' },
  { path: '/cancion/:id', component: CancionDetalle, name: 'cancion' },
  { path: '/abmservicios/:cysOrd/:cysFch/:cysLug/:modo', component: ABMServicio, name: 'abmservicios' },
  { path: '/servicio/:SDTServicio', component: ServicioDetalle, name: 'servicio' }
]

export default routes
