import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import icons
import {
    faStar,
    faMagnifyingGlass,
    faCaretDown
} from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarReg } from '@fortawesome/free-regular-svg-icons'

library.add(faStar, faStarReg, faMagnifyingGlass, faCaretDown)

const app = createApp(App)

// Registraimo il componente globalmente
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
