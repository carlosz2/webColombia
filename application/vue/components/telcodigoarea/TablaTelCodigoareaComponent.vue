 <template>
 <div class="col-md-12">
    <div class="card card-register ">
       <div class="card-header">Nivel de Estudios creados</div>
        <div class="card-body">
            <div class="col-lg-12">
                <table border="0" class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    
                    <thead>
                        <th>Nombre Nivel de Estudio</th>
                        <th>Codigo</th>
                        <th>Estado</th>
                        <th>Acción</th>
                      
                    </thead>
                    <tbody>
                        <fila-nivelestudio-component 
                            v-for="(estadoNE, key) in Nivelestudio"
                            :key="key"
                            v-bind:Nombre_NivelEstudio = estadoNE.Nombre_NivelEstudio
                            v-bind:Codigo = estadoNE.Codigo
                            v-bind:nombre_estado = estadoNE.nombre_estado
                            v-bind:id_NivelEstudio = estadoNE.id_NivelEstudio
                            v-bind:id_estado_NivelEstudio  = estadoNE.id_estado_NivelEstudio
                            v-bind:key_estadoNE = key
                        ></fila-nivelestudio-component>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

     <vs-popup classContent="popup-example"  title="Editar Nivel estudio" :active.sync="popup" style="overflow-x:hidden!important;" >
        <div class='row'>
            <div class="col-md-5">
                <div class="form-group ">
                 <div class="form-label-group">
                
                <input type="text" id="NombreNivelest" v-model="NombreNivelest" class="form-control" value="" placeholder="Nombre Nivel estudio" required/>
                <label for="NombreNivelest">Nombre Nivel estudio</label>
            </div></div>
            </div>
            <div class="col-md-4">
                <div class="form-group ">
                 <div class="form-label-group">
                
                <input type="text" id="codigoNivelest" v-model="codigoNivelest" class="form-control" value="" placeholder="Codigo Nivel estudio" required/>
                <label for="codigoNivelest">Codigo Nivel estudio</label>
                </div></div>
                <input type="hidden" class="form-control" v-model="id_Nivelest" placeholder="id Nivel estudio" />
                <input type="hidden" class="form-control" v-model="key_estadoNEpost" placeholder="key_estadoNEpost" />
                
            </div>
            </div>
        <div>
            <button v-on:click="EditarNivelestudio" class='btn btn-primary' >Editar</button>
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
                Nivelestudio: null,
                errored: false,
                popup:false,
                NombreNivelest: '',
                codigoNivelest: '',
                id_Nivelest:'',
                key_estadoNEpost:''
            }
        },
        mounted() {
            this.loadnivelestudio();
        },

        methods: {
            
            loadnivelestudio() {

                axios.get(urls.apiBackend+'Nivelestudio/buscarNivelEstudio')
                .then(response => {
              
                    this.Nivelestudio = response.data.data;
                })
                .catch(error => {
                 
                    this.errored = true;
                });
            },

            modalNivelestudio(id_nivelEstudio,id_estado,Nombre_NivelEstudio,Codigo,key_estadoNE){

                this.id_Nivelest =id_nivelEstudio;
                this.NombreNivelest =Nombre_NivelEstudio;
                this.codigoNivelest =Codigo;
                this.key_estadoNEpost =key_estadoNE;
                this.popup=true;
            },
            EditarNivelestudio(){
                const formData = new FormData();
                if(this.id_Nivelest !== null){
                    formData.set('id_NivelEstudio', this.id_Nivelest);
                }
                
                if(this.NombreNivelest !== null){
                    formData.set('Nombre_NivelEstudio', this.NombreNivelest);
                }
                if(this.codigoNivelest !== null){
                    formData.set('Codigo', this.codigoNivelest);
                }
                
                axios.post(urls.apiBackend+'Nivelestudio/editarNivelestudio', formData)
                .then(response => {
                   
                 
                this.$vs.notify({
                    title:'Nivel estudio',
                    text:'Editado correctamente',
                    color:'#763d7b'
                })
                    this.popup=false;
                    this.Nivelestudio[this.key_estadoNEpost].Nombre_NivelEstudio = this.NombreNivelest;
                    this.Nivelestudio[this.key_estadoNEpost].Codigo = this.codigoNivelest;
                
                })
                .catch(error => {
                    console.log(error);
                    this.errored = true;
                });

            },
            eliminarNivelestudiopadre(id_NivelEstudio,key_estadoNE){
					this.Nivelestudio.splice(key_estadoNE, 1);
             }
        }
    }

</script>