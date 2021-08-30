<template>
	<tr>
		<td>{{ Nombre_NivelEstudio }}</td>
		<td>{{ Codigo }}</td>
		<td>{{ nombre_estado }}</td>       
		<td>
			<div class="row">
				<div class="col-md-2">	
					<button type="button" value="Submit" id='activar' class="btn btn-primary " v-on:click="activar(id_NivelEstudio,id_estado_NivelEstudio,key_estadoNE)">
						<span v-if="id_estado_NivelEstudio == '0'">Activar</span>
						<span v-else>Desactivar</span>
					</button>
				</div>
				<div class="col-md-2">
					<button type="button" class="btn btn-primary" v-on:click="Editar(id_NivelEstudio,id_estado_NivelEstudio,Nombre_NivelEstudio,Codigo,key_estadoNE)">
						Editar
					</button>
				</div>
				<div class="col-md-2">
					<button type="button" class="btn btn-primary" v-on:click="eliminarNivelestudio(id_NivelEstudio,key_estadoNE)">
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

    	props : ['Nombre_NivelEstudio','Codigo','nombre_estado','id_NivelEstudio','id_estado_NivelEstudio','key_estadoNE'],

        data () {
            return {
                errored: false,
              	showModal: true 
            }
        },

       

        methods: {

           	activar(id_NivelEstudio,id_estado_NivelEstudio,key_estadoNE) {

				   if(id_estado_NivelEstudio == 0){
           			id_estado_NivelEstudio = 1;         			
           		}else{
           			id_estado_NivelEstudio = 0;        			
           		}
	            const formData = new FormData();

	            if(id_NivelEstudio !== null){
	                formData.set('id_NivelEstudio', id_NivelEstudio);
	            }
	            if(id_estado_NivelEstudio !== null){
	                formData.set('id_estado_NivelEstudio', id_estado_NivelEstudio);
				}
				 console.log(key_estadoNE);
	            axios.post(urls.apiBackend+'Nivelestudio/activarnivelestudio', formData)
	            .then(response => {
					
	            	if(id_estado_NivelEstudio ==0){
						 
           				this.$parent.Nivelestudio[key_estadoNE].nombre_estado = "Inactivo";
           				this.$parent.Nivelestudio[key_estadoNE].id_estado_NivelEstudio = 0;
           				this.$vs.notify({
							title:'Nivel de Estudio',
							text:' Activo!',
							color:'#763d7b'
						   })
						   
	           		}else{
						   
	           			this.$parent.Nivelestudio[key_estadoNE].nombre_estado = "Activo";
	           			this.$parent.Nivelestudio[key_estadoNE].id_estado_NivelEstudio = 1;
	           			this.$vs.notify({
						title:'Nivel de Estudio',
						text:' Inactivo!',
						color:'#763d7b'
                	})
	           		}
	            })
	            .catch(error => {
                    console.log(error);
                    this.errored = true;
                });
            }, 
            Editar(id_NivelEstudio,id_estado_NivelEstudio,Nombre_NivelEstudio,Codigo,key_estadoNE) { 
		     
		     this.$parent.modalNivelestudio(id_NivelEstudio,id_estado_NivelEstudio,Nombre_NivelEstudio,Codigo,key_estadoNE);
		   },
		   eliminarNivelestudio(id_NivelEstudio,key_estadoNE){
			 const formData = new FormData();

	            if(id_NivelEstudio !== null){
	                formData.set('id_NivelEstudio', id_NivelEstudio);
	            }
	           
	            axios.post(urls.apiBackend+'Nivelestudio/eliminarnivelestudio', formData)
	            .then(response => {
					this.$parent.eliminarNivelestudiopadre(id_NivelEstudio,key_estadoNE);
					
	            })  
		   }
        }
    }

</script>