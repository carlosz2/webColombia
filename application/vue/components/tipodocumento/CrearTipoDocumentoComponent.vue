<template>
<div class='col-md-4'> 
    <div class="card card-register ">
       <div class="card-header">Crear Tipo de Documento </div>
       <div class="card-body">
         
          
             <fieldset>
              <div class="form-group ">
                 <div class="form-label-group">
                    <input type="text" id="tipodocumento" v-model="tipodocumento" class="form-control" value="" placeholder="tipodocumento" required>
                    <label for="tipodocumento">Tipo de Documento</label>  
                 </div>
               </div>
               <div class="form-group ">
                 <div class="form-label-group">
                    <input type="text" id="Convecion_TipoDocumento" v-model="Convecion_TipoDocumento" class="form-control" value="" placeholder="Convecion_TipoDocumento" required>
                    <label for="Convecion_TipoDocumento">Convencion</label>  
                 </div>
              </div>
              <div class="form-group ">
                 <div class="form-label-group">
                    <input type="text" id="codigotipodocumento" v-model="codigotipodocumento" class="form-control" value="" placeholder="codigotipodocumento" required>
                    <label for="codigotipodocumento">Codigo civil</label>  
                 </div>
              </div>
          
          <button class="btn btn-primary" type="Submit"  id="inputGroupFileAddon02" v-on:click="sendTipodocumento">Subir</button>
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
                tipodocumento: null,
                Convecion_TipoDocumento: null,

                codigotipodocumento: null,
                errored: false
            }
        },

        methods: {
            sendTipodocumento () {
                
                const formData = new FormData();
                if(this.tipodocumento !== null){
                    formData.set('tipodocumento', this.tipodocumento);
                }
               
                if(this.codigotipodocumento !== null){
                    formData.set('codigotipodocumento', this.codigotipodocumento);
                }
                if(this.codigotipodocumento !== null){
                    formData.set('codigotipodocumento', this.codigotipodocumento);
                }
                axios.post(urls.apiBackend+'TipoDocumento/Index', formData)
                .then(response => {
                    this.codigotipodocumento = null
                  
                    this.Convecion_TipoDocumento = null
                
                    this.tipodocumento = null
                    
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