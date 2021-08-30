<template>
<div class="container" style="margin-top: 150px; ">
    <div class="row justify-content-md-center">
        <div class="col-lg-5" style="min-height: 100%;">
        <div class="card">
            <div class="card-body">
                <form @submit.prevent="loginSubmit">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nombre de Usuario</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="user" placeholder="Ingrese nombre de usuario" v-model="identity">
                        <small id="user" class="form-text text-muted">Ingrese nombre de usuario</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña" v-model="password">
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
        </div>
    </div>
</div>
</template>

</<script>
import { mapState, mapActions } from 'vuex';
 export default {
    data() {
        return {
            identity: '',
            password: ''
        }
    },
    computed: {
        ...mapState([
            'loggingIn',
            'loginError'
        ])
    },
    methods: {
        ...mapActions([
            'doLogin'
        ]),
        loginSubmit() {
            this.doLogin({
                identity: this.identity,
                password: this.password
            });
        }
    }
}
</script>

<style>

body{
    background-color: #d5d5d7;
}
</style>