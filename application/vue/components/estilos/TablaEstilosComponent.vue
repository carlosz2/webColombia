 <template>
 <div class="col-md-12">
    <div class="card card-register ">
       <div class="card-header">Estilos creados</div>
        <div class="card-body">
            <div class="col-lg-12">
                <table border="0" class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    
                    <thead>
                        <th>Nombre</th>
                        <th>Nombre archivo</th>
                        <th>Estado</th>
                        <th>Acción</th>
                      
                    </thead>
                    <tbody>
                        <fila-component 
                            v-for="estilo, key in estilos"
                            :key="key"
                            v-bind:nombre = estilo.nombre
                            v-bind:nombre_archivo = estilo.nombre_archivo
                            v-bind:nombre_estado = estilo.nombre_estado
                            v-bind:id_estilo = estilo.id_estilos
                            v-bind:key_estilo = key
                        ></fila-component>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</template>

<script>

    const axios = require('axios');

    export default {

        data () {
            return {
                estilos: null,
                errored: false
            }
        },
        mounted() {
            this.loadestilos();
        },

        methods: {
            
            loadestilos() {
                axios.get('TemplateC/BuscarEstilo')
                .then(response => {
                    this.estilos = response.data;
                })
                .catch(error => {
                    console.log(error);
                    this.errored = true;
                });
            },

            cambiarEstados(key_estilo) {

                $.each(this.estilos, function(key,value){
                    value.nombre_estado = "Inactivo";
                });

                this.estilos[key_estilo].nombre_estado = "Activo";
            }
        }
    }

</script>