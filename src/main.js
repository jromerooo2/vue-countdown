import { createApp } from 'vue'
import VueSmoothScroll from 'vue3-smooth-scroll'
import App from './App.vue'


const vue3 = createApp(App)

vue3.use(VueSmoothScroll)

vue3.mount('#app')