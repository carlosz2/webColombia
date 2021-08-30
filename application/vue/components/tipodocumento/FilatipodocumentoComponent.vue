<template>
	<tr>
		<td>{{ Nombre_TipoDocumento }}</td>
		<td>{{ Convecion_TipoDocumento }}</td>
		<td>{{ Codigo }}</td>
		<td>{{ nombre_estado }}</td>       
		<td>
			<button type="button" value="Submit" id='activar' class="btn btn-primary " v-on:click="activartipodocumento(id_TipoDocumento,id_estado_TipoDocumento,key_estadoTD),$vs.notify(myNotificador)">
			<span v-if="id_estado_TipoDocumento == '0'">Activar</span>
			<span v-else>Desactivar</span>
			</button>
			<button type="button" class="btn btn-primary" v-on:click="openModal(id_TipoDocumento,id_estado_TipoDocumento,Nombre_TipoDocumento,Convencion_TipoDocumento,Codigo,key_estadoTD)">
				Editar
			</button>
			<button type="button" class="btn btn-primary" v-on:click="eliminartipodocumento(id_TipoDocumento,key_estadoTD)">
				Eliminar
			</button>
		</td>   
	</tr>
</template>
<script>

	const axios = require('axios');
	import { urls } from '../../constants/urlConst.js';
    export default {

    	props : ['Nombre_TipoDocumento','Convencion_TipoDocumento','Codigo','nombre_estado','id_TipoDocumento','key_estadoTD','id_estado_TipoDocumento'],

        data () {
            return {
                errored: false,
              	myNotificador: null,
              	showModal: true 
            }
        },

       

        methods: {

           	activartipodocumento(id_TipoDocumento,id_estado_TipoDocumento,key_estadoTD) {

           		if(id_estado_TipoDocumento == 0){
           			id_estado_TipoDocumento = 1;
           			this.myNotificador = { title:'Tipo Documento Activo!',color:'#763d7b'};
           		}else{
           			id_estado_TipoDocumento = 0;
           			this.myNotificador = { title:'Tipo Documento Inactivo!',color:'#763d7b'};	
           		}

	            const formData = new FormData();

	            if(id_TipoDocumento !== null){
	                formData.set('id_TipoDocumento', id_TipoDocumento);
	            }
	            if(id_estado_TipoDocumento !== null){
	                formData.set('id_estado_TipoDocumento', id_estado_TipoDocumento);
	            }
	            axios.post(urls.apiBackend+'TipoDocumento/activartipodocumento', formData)
	            .then(response => {

	            	if(id_estado_TtipoDocumento == 0){
           				this.$parent.Tipodocumento[key_estadoTD].nombre_estado = "Inactivo";
           				this.$parent.Tipodocumento[key_estadoTD].id_estado_tipoDocumento = 0;
           				
	           		}else{
	           			this.$parent.Tipodocumento[key_estadoTD].nombre_estado = "Activo";
	           			this.$parent.Tipodocumento[key_estadoTD].id_estado_TipoDocumento = 1;
	           			
	           		}
	            })
	            .catch(error => {
                    console.log(error);
                    this.errored = true;
                });
            }, 
            openModal(id_TipoDocumento,id_estado_TipoDocumento,Nombre_TipoDocumento,Codigo,key_estadoTD) { 
		     
		     this.$parent.openmodalpadre(id_TipoDocumento,id_estado_TipoDocumento,Nombre_TipoDocumento,Codigo,key_estadoTD);
		   },
		   eliminartipodocumento(id_TipoDocumento,key_estadoTD){
			 const formData = new FormData();

	            if(id_TipoDocumento !== null){
	                formData.set('id_TipoDocumento', id_TipoDocumento);
	            }
	           
	            axios.post(urls.apiBackend+'TipoDocumento/eliminartipodocumento', formData)
	            .then(response => {
					this.$parent.eliminartipodocumentopadre(id_TipoDocumento,key_estadoTD);
					
	            	console.log(response);
	            })  
		   }

		   
        }
    }

</script>
<style lang="stylus">
	button{ margin-right: 10px;}
</style>