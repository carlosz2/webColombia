<template>
    <div id="wrapper">

        <sidebar-component v-if="isLogged"></sidebar-component>         

        <div id="content-wrapper">
            <div class="container-fluid">
                <router-view></router-view>
            </div>
            
            <!-- Sticky Footer -->
            <footer style='padding-top: 50px;'>
                <div class="copyright text-center my-auto">
                    <span>Solventa 2019</span>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        isLogged () {
            return this.$store.getters.userToken;
        }
    }
}
</script>

<style lang="stylus">

</style>