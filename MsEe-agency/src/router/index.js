import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Careers from '../views/Careers.vue'
import Contact from '../views/Contact.vue'
import Software from '../components/software.vue'
import Msautomation from '../components/msautomation.vue'
import Msmedia from '../components/msmedia.vue'
import Mstv from '../components/mstv.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/careers', component: Careers },
  { path: '/contact', component: Contact },
  { path: '/software', component: Software },
  { path: '/ms-automation', component: Msautomation },
  { path: '/ms-media', component: Msmedia },
  { path: '/ms-tv', component: Mstv }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; 
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' } 
    }
    return { top: 0 } 
  }
})

export default router
