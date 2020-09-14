<template>
 <a>
    <div class="contenido">
        <div class="card bg-dark text-white portada">
            <img src="../../assets/diseno/uvasCatalogo.jpg" class="imagen d-block w-100" alt="...">
            <div class="card-img-overlay">
                <h5 class="card-title centered" >Conoce nuestro blog</h5>
            </div>
        </div>
    </div>
</a>
</template>
<style scoped>
.contenido{
    margin-top: 5vh;
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
  color: white;
  font: italic normal normal 46px/1.4em didot-w01-italic,serif;
}
</style>