<template>
<div class="contenido">  
        <div class="card bg-dark text-white portada">
            <img src="../../assets/diseno/uvasCatalogo.jpg" class="imagen" alt="...">
            <div class="card-img-overlay">
                <h5 class="card-title centered" >Be my wine BLOG</h5>
            </div>
        </div>
        <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
            <div class="row">
                <app-articulo v-for="articulo in articulos" v-bind:key="articulo.id"></app-articulo>
            </div>
        </div>
        <div class="col-2"></div>
        </div>
</div>
</template>
<script>
import articulo from './articulo';
export default {
    data() {
    return{
        articulos: [
            {id: "nose", titulo:'nombre',fecha:'dia'},
            {id: "nose", titulo:'nombre',fecha:'dia'},
            {id: "nose", titulo:'nombre',fecha:'dia'},
            {id: "nose", titulo:'nombre',fecha:'dia'},
            {id: "nose", titulo:'nombre',fecha:'dia'},
            {id: "nose", titulo:'nombre',fecha:'dia'},
        ]
    }
    },
    components:{
        appArticulo: articulo
    }
}
</script>
<style scoped>
.contenido{
    margin-bottom: 10vh;
}
.portada{ 
    width: 100%;
    height: 60vh;
    border: 0;
    overflow: hidden;
    
}
.imagen{
    width: 100%;
    height: 100vh;

}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(221, 221, 221);
  font: italic normal normal 46px/1.4em didot-w01-italic,serif;
}
.filtroSeccion{
    margin-left: 15px;
}
.filtro{
    padding-top: 10px;
    color:rgb(53, 62, 80);
    font: italic normal normal 36px/1.4em didot-w01-italic,serif;
}
.tipoVinos{
    font: italic normal normal 20px/1.4em didot-w01-italic;
}
.tipoVinos1{
    font: italic normal normal 16px/1.4em didot-w01-italic;
}

.point{
    cursor:pointer;
}


</style>