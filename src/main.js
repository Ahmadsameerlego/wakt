import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';




// import bootstrap 
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'normalize.css'

// import my css
// import './assets/css/style.css'

// import fontawesome 
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far, fab)
dom.watch();

// import i18n 
import VueI18n from 'vue-i18n'
import i18n from './i18n'


// import sweetalert 
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


// import pagination
import Paginate from "vuejs-paginate-next";


// import google map 
import VueGoogleMaps from '@fawmi/vue-google-maps'



// import axios 
import axios from 'axios';
axios.defaults.baseURL = 'http://cimarmeats.com/api/'
// axios.defaults.headers.common['Authorization'] =  `Bearer ${localStorage.getItem('token')}`;
// axios.defaults.headers.lang = localStorage.getItem('locale');

loadFonts()






createApp(App).component('site-header', HeaderComponent).component('site-footer', FooterComponent).component('layout-option', LayoutOption).use(router).use(store).use(VueSweetalert2).use(i18n).use(VueI18n).component("font-awesome-icon", FontAwesomeIcon).use(Paginate).use(vuetify)
.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyB4d19CAL7u_hJ8k4P7EaQFcnner_Q9KEo',
        // language: 'de',
    },
})

.mount('#app')
