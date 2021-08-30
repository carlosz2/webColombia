window.Vue = require('vue');

import Vue from 'vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css';
import router from './router';
import store from './store';

Vue.use(Vuesax)

//componentes

//home
Vue.component('home-component', require('./components/home/HomeComponent.vue').default);
Vue.component('navbar-component', require('./components/home/NavbarComponent.vue').default);
Vue.component('wrapper-component', require('./components/home/WrapperComponent.vue').default);
Vue.component('sidebar-component', require('./components/home/SidebarComponent.vue').default);

//tesoreria
Vue.component('tesoreria-component', require('./components/tesoreria/TesoreriaComponent.vue').default);

// estilos
Vue.component('crear-estilos-component', require('./components/estilos/CrearEstilosComponent.vue').default);
Vue.component('tabla-estilos-component', require('./components/estilos/TablaEstilosComponent.vue').default);
Vue.component('fila-component', require('./components/estilos/FilaComponent.vue').default);

// Estadocivil
Vue.component('crear-estadocivil-component', require('./components/estadocivil/CrearEstadoCivilComponent.vue').default);
Vue.component('tabla-estadocivil-component', require('./components/estadocivil/TablaEstadoCivilComponent.vue').default);
Vue.component('fila-estadocivil-component', require('./components/estadocivil/FilaestadocivilComponent.vue').default);
Vue.component('modal-estadocivil-component', require('./components/estadocivil/ModalComponent.vue').default);

// NivelEstudio
Vue.component('crear-nivelestudio-component', require('./components/nivelestudio/CrearNivelEstudioComponent.vue').default);
Vue.component('tabla-nivelestudio-component', require('./components/nivelestudio/TablaNivelEstudioComponent.vue').default);
Vue.component('fila-nivelestudio-component', require('./components/nivelestudio/FilanivelestudioComponent.vue').default);
Vue.component('modal-nivelestudio-component', require('./components/nivelestudio/ModalComponent.vue').default);


// Tipodocumento
Vue.component('crear-tipodocumento-component', require('./components/tipodocumento/CrearTipoDocumentoComponent.vue').default);
Vue.component('tabla-tipodocumento-component', require('./components/tipodocumento/TablaTipoDocumentoComponent.vue').default);
Vue.component('fila-tipodocumento-component', require('./components/tipodocumento/FilatipodocumentoComponent.vue').default);
Vue.component('modal-tipodocumento-component', require('./components/tipodocumento/ModalComponent.vue').default);

// TelCodigoarea
Vue.component('crear-TelCodigoarea-component', require('./components/telcodigoarea/CrearTelCodigoareaComponent.vue').default);
Vue.component('tabla-TelCodigoarea-component', require('./components/telcodigoarea/TablaTelCodigoareaComponent.vue').default);
Vue.component('fila-TelCodigoarea-component', require('./components/telcodigoarea/FilaTelCodigoareaComponent.vue').default);
Vue.component('modal-TelCodigoarea-component', require('./components/telcodigoarea/ModalComponent.vue').default);


const app = new Vue({
    store,
    router,
    el: '#app-vue',
});

