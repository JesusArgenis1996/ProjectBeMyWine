<template>
<div class="contenido">  
        <div class="card bg-dark text-white portada">
            <img src="../../assets/diseno/uvasCatalogo.jpg" class="imagen" alt="...">
            <div class="card-img-overlay">
                <h5 class="card-title centered" >Contactanos</h5>
            </div>
        </div>
        <div class="row">
        <div class="col-3"></div>
        <div class="col-6 conte">
            <h3 class="subTitulo">Tienes alguna pregunta?</h3>
            <hr>
            <form>
            <div class="form-group">
            <label for="exampleInputEmail1" class="sub">Nombre</label>
            <input type="name" class="form-control" id="exampleInputNombre1" aria-describedby="NombreHelp">
            <label for="exampleInputEmail1" class="sub">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <label for="exampleFormControlTextarea1" class="sub">Escribenos todas tus dudas</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
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