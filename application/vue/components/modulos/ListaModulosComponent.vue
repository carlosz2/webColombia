<template>
    <div class="content-wrapper">
        <section class="container-fluid">   
            <div id="div-with-loading" class="card mt-3 vs-con-loading__container">
                <div class="card-header">
                    <strong>Accesos</strong>
                </div>
                <div class="card-body">
                    <div class="row">  
                        <div v-for="(modulo) in modulos" v-bind:key="modulo.id" class="col-xl-2 col-sm-6 mb-3">
                            <router-link v-bind:to="modulo.url">
                                <div class="card text-white bg-primary o-hidden h-100">
                                <div class="card-body">
                                    <div class="card-body-icon">
                                    <i class="fas fa-fw fa-comments"></i>
                                    </div>

                                    <div class="mr-5">{{ modulo.nombre }}</div>
                                </div>
                                <a class="card-footer text-white clearfix small z-1" style="cursor: pointer;">
                                    <span class="float-left">Ir</span>
                                    <span class="float-right">
                                    <i class="fas fa-angle-right"></i>
                                    </span>
                                </a>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
const axios = require('axios');
import { urls } from '../../constants/urlConst.js';

export default {

    data () {
        return {
            modulos: null,
            errored: false
        }
    },

    mounted() {
        this.$vs.loading({container: '#div-with-loading'});
        this.loadModules();
    },

    methods: {

        loadModules() {

           

            axios.get(urls.apiBackend+'CrudModulo/jsonModulos')
            .then(response => {
                console.log(response.data.data)
                this.modulos = response.data.data;
                setTimeout( ()=> {
                    this.$vs.loading.close('#div-with-loading > .con-vs-loading')
                }, 1000);
            })
            .catch(error => {
                console.log(error)
                this.errored = true;
            });
        }
    }
}
</script>

<style lang="stylus">

</style>