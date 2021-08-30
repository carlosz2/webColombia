<template>
    <!-- Sidebar -->
    <ul class="sidebar navbar-nav">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-fw fa-folder"></i>
            <span>Accesos</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="pagesDropdown">
                <h6 class="dropdown-header">Paginas</h6>
                <a class="dropdown-item" href="#">Atencion</a>
                <a class="dropdown-item" href="/tesoreria">Productos</a>
                <router-link to="/tesoreria" class="my-route"><a class="dropdown-item">Tesoreria</a></router-link>
                <a class="dropdown-item" href="#">Soporte</a>
                
            </div>
        </li>            
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-fw fa-folder"></i>
            <span>Estilos</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="pagesDropdown">
               <router-link to="/estilos" class="my-route"> <a class="dropdown-item">Estilos</a></router-link>
            </div>
        </li>         
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-fw fa-folder"></i>
            <span>Cod. Barra</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="pagesDropdown">
            
                <a class="dropdown-item" href="#">Ejemplo CB</a>
                
            </div>
        </li>        
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-fw fa-folder"></i>
            <span>PDF</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="pagesDropdown">
            
                <a class="dropdown-item" href="#">Ejemplo Pdf</a>
                
            </div>
        </li>      
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-fw fa-folder"></i>
            <span>ABM Tablas</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="pagesDropdown">
                <router-link to="/estadocivil" class="my-route"> <a class="dropdown-item" >Estado Civil</a></router-link>
                <router-link to="/nivelestudio" class="my-route"> <a class="dropdown-item" >Nivel de Estudio</a></router-link>
                 <router-link to="/tipodocumento" class="my-route"> <a class="dropdown-item" >Tipo Documento</a></router-link>
            </div>
            
            
               
                
            
        </li>
    </ul>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus">
.my-route:link
    text-decoration:none
</style>