<template>
<div class='col-md-6'> 
    <div class="card card-register ">
       <div class="card-header">Crear Nivel de Estudio </div>
       <div class="card-body">
         
          
             <fieldset>
              <div class="form-group ">
                 <div class="form-label-group">
                    <input type="text" id="nivelestudio" v-model="nivelestudio" class="form-control" value="" placeholder="nivelestudio" required>
                    <label for="nivelestudio">Nivel de Estudio</label>  
                 </div>
               </div>
               <div class="form-group ">
                 <div class="form-label-group">
                    <input type="text" id="codigonivel" v-model="codigonivel" class="form-control" value="" placeholder="codigonivel" required>
                    <label for="codigonivel">Codigo Nivel de Estudio</label>  
                 </div>
              </div>
          
          <button class="btn btn-primary" type="Submit"  id="inputGroupFileAddon02" v-on:click="sendNivelestudio">Subir</button>
             </fieldset>
             
      </div>
    </div>
  </div>
</template>
<script>

const axios = require('axios');
import { urls } from '../../constants/urlConst.js';
    export default {  
        data () {
            return {
                nivelestudio: null,
                codigonivel: null,              
                errored: false
            }
        },

        methods: {
            sendNivelestudio() {
                
                const formData = new FormData();
                if(this.nivelestudio !== null){
                    formData.set('nivelestudio', this.nivelestudio);
                }
               
                if(this.codigonivel !== null){
                    formData.set('codigonivel', this.codigonivel);
                }
                axios.post(urls.apiBackend+'NivelEstudio/Index', formData)
                .then(response => {
                  this.codigonivel = null
                  this.codigonivel = null
                 
                    window.location.reload();
                })
                .catch(error => {
                    console.log(error);
                    this.errored = true;
                });
            }
           
        }
    }
</script>