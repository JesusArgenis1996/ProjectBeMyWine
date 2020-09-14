<template>
<div class="contenido">  
        <div class="card bg-dark text-white portada">
            <img src="../../assets/diseno/imagenContacto.jpg" class="imagen" alt="...">
            <div class="card-img-overlay">
                <h5 class="card-title centered" >Nuestra historia</h5>
            </div>
        </div>
        <div class="row">
        <div class="col-3"></div>
        <div class="col-6 conte">
            <h3 class="subTitulo">Como empezo esto</h3>
            <hr>
            <p class="sub">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, eos aliquid eveniet voluptatibus deserunt suscipit quas nostrum laborum! Animi voluptate dolorem repellat dignissimos dolores, similique veniam dolore alias minima recusandae!</p>
        </div>
        <div class="col-3"></div>
        </div>
</div>
</template>
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
.sub{
    color: gray;
    text-align: left;
    font: italic normal normal 16px/1.4em didot-w01-italic,serif;
}
.subTitulo{
    margin-top:10px;
    font: italic normal normal 26px/1.4em didot-w01-italic,serif;
    text-align: center;
}


</style>