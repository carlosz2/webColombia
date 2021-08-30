<template>
	<tr>
		<td>{{ nombre }}</td>
		<td>{{ nombre_archivo }}</td>
		<td>{{ nombre_estado }}</td>       
		<td><button type="button" value="Submit" id='activar' class="btn btn-primary " v-on:click="activarEstilo(id_estilo,key_estilo),$vs.notify({title:'Estilo Activo!',color:'#763d7b'})">Activa</button></td>   
	</tr>
</template>
<script>

	const axios = require('axios');

    export default {

    	props : ['nombre','nombre_archivo','nombre_estado','id_estilo','key_estilo'],

        data () {
            return {
                errored: false
            }
        },

        methods: {

           	activarEstilo (idFolder,key_estilo) {
	            const formData = new FormData();

	            if(idFolder !== null){
	                formData.set('idFolder', idFolder);
	            }
	            axios.post('/TemplateC/activarestilo', formData)
	            .then(response => {
	            	this.$parent.cambiarEstados(key_estilo);
	            })
	            .catch(error => {
                    console.log(error);
                    this.errored = true;
                });
            }, 
        }
    }

</script>