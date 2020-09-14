<template>
  <div class="carta">
    <div class="card">
      <img src="../../assets/productos/vinoTinto.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Nombre del vino</h5>
        <p class="card-text">$99999.999</p>
        <button href="#" class="boton">Comprar</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["vinos"],
};
</script>
<style scoped>
.carta {
  width: 23%;
  margin-left: 2%;
  margin-top: 2vh;
}
.card {
  border: 0;
  width: 100%;
}
.card-title {
  padding-top: 10px;
  text-align: center;
  font-weight: 900;
  font: italic normal normal 26px/1.4em didot-w01-italic, serif;
}
.card-text {
  text-align: center;
  margin: 5px;
  font: normal normal normal 20px/1.4em didot-w01-italic, serif;
}
.card-body {
  margin: 0;
  padding: 0;
}
.boton {
  margin: 0;
  padding-left: 0;
  width: 100%;
  height: 5vh;
  color: rgb(255, 255, 255);
  background-color: rgb(36, 42, 53);
  border-width: 0px;
  transition: background-color 0.5s ease;
}
.boton:hover {
  background-color: rgb(84, 85, 87);
}
</style>