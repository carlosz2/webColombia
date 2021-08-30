import Vue from 'vue'
import Router from 'vue-router'
import store from './store';

import HomeComponent from './components/home/HomeComponent.vue';
import TesoreriaComponent from './components/tesoreria/TesoreriaComponent.vue';
import ListaModulosComponent from './components/modulos/ListaModulosComponent.vue';
import EstilosComponent from './components/estilos/EstilosComponent.vue';
import EstadoCivilComponent from './components/estadocivil/EstadoCivilComponent.vue';
import NivelEstudioComponent from './components/nivelestudio/NivelEstudioComponent.vue';
import TipoDocumentoComponent from './components/tipodocumento/TipoDocumentoComponent.vue';
import LoginComponent from './components/home/LoginComponent.vue';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            component: HomeComponent,
            children: [
                {
                    path: '',
                    name: 'modules',
                    component: ListaModulosComponent
                },
                {
                    path: 'tesoreria',
                    name: 'tesoreria',
                    component: TesoreriaComponent
                },
                {
                    path: 'estilos',
                    name: 'estilos',
                    component: EstilosComponent
                },
                {
                    path: 'estadocivil',
                    name: 'estadocivil',
                    component: EstadoCivilComponent
                },
                {
                    path: 'nivelestudio',
                    name: 'nivelestudio',
                    component: NivelEstudioComponent
                },
                {
                    path: 'tipodocumento',
                    name: 'tipodocumento',
                    component: TipoDocumentoComponent
                },
                {
                    path: 'login',
                    name: 'login',
                    component: LoginComponent
                }
            ]
        }
    ],
})

router.beforeEach((to, _from, next) => {

    store.dispatch('fetchAccessToken');

    if (!store.getters.userToken) {
        if(to.fullPath !== '/login'){
            next('/login');
        }
    } else {
        if(to.fullPath === '/login'){
            next('/');
        }
        next();
    }

    next();
});

export default router;