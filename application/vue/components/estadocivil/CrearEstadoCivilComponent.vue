<template>
<div class='col-md-4'> 
    <div class="card card-register ">
       <div class="card-header">Crear Estado civil </div>
       <div class="card-body">
         
          
             <fieldset>
              <div class="form-group ">
                 <div class="form-label-group">
                    <input type="text" id="estadocivil" v-model="estadocivil" class="form-control" value="" placeholder="estadocivil" required>
                    <label for="estadocivil">Estado civil</label>  
                 </div>
               </div>
               <div class="form-group ">
                 <div class="form-label-group">
                    <input type="text" id="codigocivil" v-model="codigocivil" class="form-control" value="" placeholder="codigocivil" required>
                    <label for="codigocivil">Codigo civil</label>  
                 </div>
              </div>
          
          <button class="btn btn-primary" type="Submit"  id="inputGroupFileAddon02" v-on:click="sendEstadocivil">Subir</button>
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
                estadocivil: null,
                codigocivil: null,              
                errored: false
            }
        },

        methods: {
            sendEstadocivil () {
                
                const formData = new FormData();
                if(this.estadocivil !== null){
                    formData.set('estadocivil', this.estadocivil);
                }
               
                if(this.codigocivil !== null){
                    formData.set('codigocivil', this.codigocivil);
                }
                axios.post(urls.apiBackend+'EstadoCivil/index', formData)
                .then(response => {
                  this.codigocivil = null
                  this.estadocivil = null
                 
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