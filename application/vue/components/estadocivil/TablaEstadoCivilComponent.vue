 <template>
 <div class="col-md-8">
    <div class="card card-register ">
       <div class="card-header">Estado civil creados</div>
        <div class="card-body">
            <div class="col-lg-12">
                <table border="0" class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    
                    <thead>
                        <th>Nombre estado civil</th>
                        <th>Codigo</th>
                        <th>Estado</th>
                        <th>Acción</th>
                      
                    </thead>
                    <tbody>
                        <fila-estadocivil-component 
                            v-for="(estadoC, key) in Estadoscivil"
                            :key="key"
                            v-bind:Nombre_EstadoCivil = estadoC.Nombre_EstadoCivil
                            v-bind:Codigo = estadoC.Codigo
                            v-bind:nombre_estado = estadoC.nombre_estado
                            v-bind:id_EstadoCivil = estadoC.id_EstadoCivil
                            v-bind:id_estado_EstadoCivil = estadoC.id_estado_EstadoCivil
                            v-bind:key_estadoC = key
                        ></fila-estadocivil-component>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <vs-popup classContent="popup-example"  title="Editar estado civil" :active.sync="popup" style="overflow-x:hidden!important;">
        <div class='row'>
            <div class="col-md-5">
                <div class="form-group ">
                 <div class="form-label-group">
                
                <input type="text" id="Nombreestadocivil" v-model="Nombreestadocivil" class="form-control" value="" placeholder="Nombre estado civil" required/>
                <label for="Nombreestadocivil">Nombre estado civil</label>
            </div></div>
            </div>
            <div class="col-md-4">
                <div class="form-group ">
                 <div class="form-label-group">
                
                <input type="text" id="codigoestadocivil" v-model="codigoestadocivil" class="form-control" value="" placeholder="Codigo estado civil" required/>
                <label for="codigoestadocivil">Codigo estado civil</label>
                </div></div>
                <input type="hidden" class="form-control" v-model="id_EstadoCivil" placeholder="id EstadoCivil" />
            </div>
            </div>
        <div>
            <button v-on:click="EditarEstadocivil" class='btn btn-primary' >Editar</button>
        </div>
    </vs-popup>
</div>
</template>
<script>

    const axios = require('axios');
    import { urls } from '../../constants/urlConst.js';
    export default {

        data () {
            return {
                Estadoscivil: null,
                errored: false,
                popup:false,
                Nombreestadocivil: '',
                codigoestadocivil: '',
                id_EstadoCivil:''
            }
        },
        mounted() {
            this.loadestadocivil();
        },

        methods: {
            
            loadestadocivil() {

                axios.get(urls.apiBackend+'EstadoCivil/buscarEstadoCivil')
                .then(response => {
                  
                    this.Estadoscivil = response.data.data;
                })
                .catch(error => {
                 
                    this.errored = true;
                });
            },

            openmodalpadre(id_EstadoCivil,id_estado_EstadoCivil,Nombre_EstadoCivil,Codigo,key_estadoC){

                this.id_EstadoCivil =id_EstadoCivil;
                this.Nombreestadocivil =Nombre_EstadoCivil;
                this.codigoestadocivil =Codigo;
                this.popup=true;
            },
            EditarEstadocivil() {
                const formData = new FormData();
                if(this.id_EstadoCivil !== null){
                    formData.set('id_EstadoCivil', this.id_EstadoCivil);
                }
                
                if(this.Nombreestadocivil !== null){
                    formData.set('Nombreestadocivil', this.Nombreestadocivil);
                }
                if(this.codigoestadocivil !== null){
                    formData.set('codigoestadocivil', this.codigoestadocivil);
                }
                
                axios.post(urls.apiBackend+'EstadoCivil/editarEstadocivil', formData)
                .then(response => {
                  this.$vs.loading.close('.vs-component'); 
                 this.$vs.notify({
                    title:'Estado civil',
                    text:'Editado correctamente',
                    color:'#763d7b'
                })
                setTimeout(function () {
                    window.location.reload();
                }.bind(this), 1500)
                
                })
                .catch(error => {
                    console.log(error);
                    this.errored = true;
                });

            },
            eliminarestadocivilpadre(id_EstadoCivil,key_estadoC){
					this.Estadoscivil.splice(key_estadoC, 1);
             }
        }

    }

</script>
