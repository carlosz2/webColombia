<template>
<div class='col-md-6'> 
    <div class="card card-register ">
       <div class="card-header">Crear estilos</div>
       <div class="card-body">
         
          
             <fieldset>
              <div class="form-group ">
               <div class="form-label-group">
                  <input type="text" id="nombreestilo" v-model="nombreestilo" class="form-control" value="" placeholder="nombreestilo" required>
                  <label for="nombreestilo">Nombre de estilo</label>
                  
               </div>
            </div>
          <div class="input-group mb-3">
            <div class="custom-file">
              <input type="file" class="" @change="onfileSelected" id="fileestilo" accept=".css" required="required">
              <label class="custom-file-label" for="fileestilo" aria-describedby="inputGroupFileAddon02">Cargar nuevo estilo css</label>
            </div> 
          </div>
             </fieldset>
             <button class="btn btn-primary" type="Submit"  id="inputGroupFileAddon02" v-on:click="sendEstilo">Subir</button>
      </div>
    </div>
  </div>
</template>
<script>

const axios = require('axios');
    export default {  
        data () {
            return {
                nombreestilo: null,
                fileestilo: null,              
                errored: false
            }
        },

        methods: {
            sendEstilo () {
                
                const formData = new FormData();
                if(this.nombreestilo !== null){
                    formData.set('nombreestilo', this.nombreestilo);
                }
               
                if(this.fileestilo !== null){
                    formData.set('fileestilo', this.fileestilo);
                }
                axios.post('/TemplateC/index', formData)
                .then(response => {
                    alert(response);
                })
                .catch(error => {
                    console.log(error);
                    this.errored = true;
                });
            },

            onfileSelected (event) {
                this.fileestilo = event.target.files[0];
                
            }
           
        }
    }
</script>