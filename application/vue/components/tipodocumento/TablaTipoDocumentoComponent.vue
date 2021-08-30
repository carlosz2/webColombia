 <template>
 <div class="col-md-8">
    <div class="card card-register ">
       <div class="card-header">Tipo Documentos creados</div>
        <div class="card-body">
            <div class="col-lg-12">
                <table border="0" class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    
                    <thead>
                        <th>Nombre tipo documento</th>
                        <th>Codigo</th>
                        <th>Estado</th>
                        <th>Acción</th>
                      
                    </thead>
                    <tbody>
                        <fila-tipodocumento-component 
                            v-for="(estadoTD, key) in Tiposdocumento"
                            :key="key"
                            v-bind:Nombre_TipoDocumento = estadoTD.Nombre_TipoDocumento
                            v-bind:Codigo = estadoTD.Codigo
                            v-bind:nombre_estado = estadoTD.nombre_estado
                            v-bind:id_TipoDocumento = estadoTD.id_TipoDocumento
                            v-bind:id_estado_TipoDocumento = estadoTD.id_estado_TipoDocumento
                            v-bind:key_estadoTD = key
                        ></fila-tipodocumento-component>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <vs-popup classContent="popup-example"  title="Editar tipo documento" :active.sync="popup" style="overflow-x:hidden!important;">
        <div class='row'>
            <div class="col-md-5">
                <div class="form-group ">
                 <div class="form-label-group">
                
                <input type="text" id="Nombretipodocumento" v-model="Nombretipodocumento" class="form-control" value="" placeholder="Nombre tipo documento" required/>
                <label for="Nombretipodocumento">Nombre tipo documento</label>
            </div></div>
            </div>
            <div class="col-md-4">
                <div class="form-group ">
                 <div class="form-label-group">
                
                <input type="text" id="codigotipodocumento" v-model="codigotipodocumento" class="form-control" value="" placeholder="Codigo tipo documento" required/>
                <label for="codigotipodocumento">Codigo tipo documento</label>
                </div></div>
                <input type="hidden" class="form-control" v-model="id_TipoDocumento" placeholder="id Tipodocumento" />
            </div>
            <div class="col-md-4">
                <div class="form-group ">
                 <div class="form-label-group">
                
                <input type="text" id="Convencion_TipoDocumentotipodocumento" v-model="codigotipodocumento" class="form-control" value="" placeholder="Convencion_TipoDocumento tipo documento" required/>
                <label for="Convencion_TipoDocumento">Convencion_TipoDocumento tipo documento</label>
                </div></div>
                <input type="hidden" class="form-control" v-model="id_TipoDocumento" placeholder="id Tipodocumento" />
            </div>
        <div>
            <button v-on:click="EditarTipoDocumento" class='btn btn-primary' >Editar</button>
        </div>
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
                Tipodocumento: null,
                errored: false,
                popup:false,
                Nombretipodocumento: '',
                codigotipodocumento: '',
                Convencion_TipoDocumento:'',
                id_TipoDocumento:''
            }
        },
        mounted() {
            this.loadtipodocumento();
        },

        methods: {
            
            loadtipodocumento() {

                axios.get(urls.apiBackend+'TipoDocumento/buscarTipoDocumento')
                .then(response => {
                  
                    this.Tiposdocumento = response.data.data;
                })
                .catch(error => {
                 
                    this.errored = true;
                });
            },

            cambiarEstados(key_estadoTD) {

                this.Tiposdocumento[key_estadoTD].nombre_estado = "Inactivo";
            },
            openmodalpadre(id_TipoDocumento,id_estado_TipoDocumento,Nombre_TipoDocumento,Codigo,key_estadoTD){

                this.id_TipoDocumento =id_TipoDocumento;
                this.Nombretipodocumento =Nombre_TipoDocumento;
                this.codigotipodocumento =Codigo;
                this.popup=true;
            },
            EditarEstadoTDivil() {
                const formData = new FormData();
                if(this.id_TipoDocumento !== null){
                    formData.set('id_TipoDocumento', this.id_TipoDocumento);
                }
                
                if(this.Nombretipodocumento !== null){
                    formData.set('Nombretipodocumento', this.Nombretipodocumento);
                }
                if(this.codigotipodocumento !== null){
                    formData.set('codigotipodocumento', this.codigotipodocumento);
                }
                
                axios.post(urls.apiBackend+'TipoDocumento/editarTipoDocumento', formData)
                .then(response => {
                  this.$vs.loading.close('.vs-component'); 
                 this.$vs.notify({
                    title:'Tipo Documento',
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
            eliminartipodocumentopadre(id_TipoDocumento,key_estadoTD){
					this.Tipodocumento.splice(key_estadoTD, 1);
             }
        }

    }

</script>
