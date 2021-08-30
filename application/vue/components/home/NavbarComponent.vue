<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark static-top">
        
        <router-link v-if="isLogged" to="/" class="my-route"><a class="navbar-brand mr-1"><img style="width: 150px;"  src="public/images/logo.png"></a></router-link>
        <a v-else class="navbar-brand mr-1"><img style="width: 150px;"  src="public/images/logo.png"></a>

        <button v-if="isLogged" class="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
            <i class="fas fa-bars"></i>
        </button>
        <!-- Navbar Search -->
        <div class="d-none d-md-inline-block ml-auto mr-0 mr-md-3 my-2 my-md-0">
        </div>
        <!-- Navbar -->
        <ul v-if="isLogged" class="navbar-nav ml-auto ml-md-0">
            <li class="nav-item dropdown no-arrow">
                <a class="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-user-circle fa-fw"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                    <a class="dropdown-item" @click="doLogout" style="cursor: pointer;">Logout</a>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        isLogged () {
            return this.$store.getters.userToken;
        },

        ...mapState([
            'loggingIn',
            'loginError'
        ])
    },
    
    methods: {

        ...mapActions([
            'logout'
        ]),

        doLogout() {
            this.logout();
        }
    }
}
</script>

<style lang="stylus">

</style>