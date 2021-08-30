<template>
	<tr>
		<td>{{ Nombre_EstadoCivil }}</td>
		<td>{{ Codigo }}</td>
		<td>{{ nombre_estado }}</td>       
		<td>
			<div class="row">
				<div class="col-md-3">
					<button type="button" value="Submit" id='activar' class="btn btn-primary " v-on:click="activarEstadocivil(id_EstadoCivil,id_estado_EstadoCivil,key_estadoC),$vs.notify(myNotificador)">
					<span v-if="id_estado_EstadoCivil == '0'">Activar</span>
					<span v-else>Desactivar</span>
					</button>
				</div>
				<div class="col-md-3">
					<button type="button" class="btn btn-primary" v-on:click="openModal(id_EstadoCivil,id_estado_EstadoCivil,Nombre_EstadoCivil,Codigo,key_estadoC)">
						Editar
					</button>
				</div>
				<div class="col-md-3">
					<button type="button" class="btn btn-primary" v-on:click="eliminarestadocivil(id_EstadoCivil,key_estadoC)">
						Eliminar
					</button>
				</div>
			</div>
		</td>   
	</tr>
</template>
<script>

	const axios = require('axios');
	import { urls } from '../../constants/urlConst.js';
    export default {

    	props : ['Nombre_EstadoCivil','Codigo','nombre_estado','id_EstadoCivil','key_estadoC','id_estado_EstadoCivil'],

        data () {
            return {
                errored: false,
              	myNotificador: null,
              	showModal: true 
            }
        },

       

        methods: {

           	activarEstadocivil (id_EstadoCivil,id_estado_EstadoCivil,key_estadoC) {
				   
           		if(id_estado_EstadoCivil == 0){
           			id_estado_EstadoCivil = 1;
           			this.myNotificador = { title:'Estado civil Activo!',color:'#763d7b'};
           		}else{
           			id_estado_EstadoCivil = 0;
           			this.myNotificador = { title:'Estado civil Inactivo!',color:'#763d7b'};	
           		}

	            const formData = new FormData();

	            if(id_EstadoCivil !== null){
	                formData.set('id_EstadoCivil', id_EstadoCivil);
	            }
	            if(id_estado_EstadoCivil !== null){
	                formData.set('id_estado_EstadoCivil', id_estado_EstadoCivil);
	            }
	            axios.post(urls.apiBackend+'EstadoCivil/activarestadocivil', formData)
	            .then(response => {

	            	if(id_estado_EstadoCivil == 0){
           				this.$parent.Estadoscivil[key_estadoC].nombre_estado = "Inactivo";
           				this.$parent.Estadoscivil[key_estadoC].id_estado_EstadoCivil = 0;
           				
	           		}else{
	           			this.$parent.Estadoscivil[key_estadoC].nombre_estado = "Activo";
	           			this.$parent.Estadoscivil[key_estadoC].id_estado_EstadoCivil = 1;
	           			
	           		}
	            })
	            .catch(error => {
                    console.log(error);
                    this.errored = true;
                });
            }, 
            openModal(id_EstadoCivil,id_estado_EstadoCivil,Nombre_EstadoCivil,Codigo,key_estadoC) { 
		     
		     this.$parent.openmodalpadre(id_EstadoCivil,id_estado_EstadoCivil,Nombre_EstadoCivil,Codigo,key_estadoC);
		   },
		   eliminarestadocivil(id_EstadoCivil,key_estadoC){
			 const formData = new FormData();

	            if(id_EstadoCivil !== null){
	                formData.set('id_EstadoCivil', id_EstadoCivil);
	            }
	           
	            axios.post(urls.apiBackend+'EstadoCivil/eliminarestadocivil', formData)
	            .then(response => {
					this.$parent.eliminarestadocivilpadre(id_EstadoCivil,key_estadoC);
					
	            })  
		   }

		   
        }
    }

</script>
<style lang="stylus">
	button{ margin-right: 10px;}
</style>