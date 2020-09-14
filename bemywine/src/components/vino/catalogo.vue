<template>
<div class="contenido">  
        <div class="card bg-dark text-white portada">
            <img src="../../assets/diseno/vinosCatalogo.jpg" class="imagen" alt="...">
            <div class="card-img-overlay">
                <h5 class="card-title centered" >Catalogo de vinos</h5>
            </div>
        </div>
        <div class="row">
            <div class="col-2">
                <div class="filtroSeccion">
                    <h1 class="filtro">Filtro por</h1>
                    <hr>
                    <div class="tipo">
                        <p class="tipoVinos">Tipo de vino</p>
                        <input type="radio" id="todos" name="categoria" value="todos" class="point">
                        <label for="todos" class="tipoVinos1 point"> Todos</label><br>
                        <input type="radio" id="tinto" name="categoria" value="tinto" class="point">
                        <label for="tinto" class="tipoVinos1 point"> Vino tinto</label><br>
                        <input type="radio" id="rosado" name="categoria" value="rosado">
                        <label for="rosado" class="tipoVinos1"> Vino Rosado</label><br>
                        <input type="radio" id="blanco" name="categoria" value="blanco">
                        <label for="blanco" class="tipoVinos1"> Vino blanco</label>
                    </div>
                    <hr>
                    <div class="tipo">
                        <p class="tipoVinos">Precio</p>
                        <input type="radio" id="nuevo" name="precio" value="nuevo">
                        <label for="nuevo" class="tipoVinos1">Nuevos Primeros</label><br>
                        <input type="radio" id="caro" name="precio" value="caro">
                        <label for="caro" class="tipoVinos1">Mas caro primero</label><br>
                        <input type="radio" id="barato" name="precio" value="barato">
                        <label for="barato" class="tipoVinos1">Mas barato primero</label>
                    </div>
                </div>
            </div>
            <div class="col-10 row">
                <app-vino v-for="vino in vinos" v-bind:key="vino.id"></app-vino>
            </div>
        </div>
</div>
</template>
<script>
import vino from './vino';
export default {
    data() {
        return {
            vinos:[
                {id:1, name: 'Cabernet', price: 110, category: "red"},
                {id:2, name: 'Malbec', price: 110, category: "red"},
                {id:3, name: 'Concha y TORO', price: 110, category: "blanco"},
                {id:4, name: 'PuertoNuevo', price: 110, category: "blanco"},
                {id:5, name: 'Cetto', price: 110, category: "pink"},
                {id:6, name: 'Zinfandel', price: 110, category: "pink"}
            ]
        }
    },
    components:{
        appVino: vino
    },
    methods:{
        hacer(){
            console.log("Hola");
        }
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