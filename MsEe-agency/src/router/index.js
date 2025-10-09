import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Careers from '../views/Careers.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/careers', component: Careers },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // vraća poziciju ako korisnik ide back/forward
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' } // smooth scroll na element sa id-jem
    }
    return { top: 0 } // po defaultu, skroluje na vrh stranice
  }
})

export default router
