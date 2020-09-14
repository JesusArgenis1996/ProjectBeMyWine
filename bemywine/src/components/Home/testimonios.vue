<template>
<div class='contenido'>
<div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-interval="10000">
      <img src="../../assets/nuevosHome/fondo.jpg" class="d-block w-100 imagen" alt="Hola">
      <div class="card-img-overlay">
                <h5 class="card-title centered" >"Entregas a tiempo buen servicio"</h5>
                <p class="centered2">Argenis Chingon</p>
            </div>
    </div>
    <div class="carousel-item" data-interval="2000">
      <img src="../../assets/nuevosHome/fondo.jpg" class="d-block w-100 imagen" alt="Hola">
      <div class="card-img-overlay">
                <h5 class="card-title centered" >"Muy buenos disenos"</h5>
                <p class="centered2">Samuel Cebolla</p>
            </div>
    </div>
    <div class="carousel-item">
      <img src="../../assets/nuevosHome/fondo.jpg" class="d-block w-100 imagen" alt="Hola">
      <div class="card-img-overlay">
                <h5 class="card-title centered" >"Entrega a tiempo y atencion al cliente"</h5>
                <p class="centered2">Pitufina Gonzales"</p>
            </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
</template>
<style scoped>

.imagen{
    width: 100%;
    height: 30vh;
}
.centered {
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font: italic normal normal 26px didot-w01-italic,serif;
}
.centered2 {
  position: absolute;
  top: 63%;
  left:50%;
  transform: translate(-50%, -50%);
  color: white;
  font-family: Arial,Helvetica,sans-serif
}
</style>