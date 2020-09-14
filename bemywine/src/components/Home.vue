<template>
  <div class="anotherone">
    <div id="carouselExampleIndicators" class="carousel slide d" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="../assets/nuevosHome/regalo1.jpg" alt="First slide" />
          <div class="carousel-caption d-none d-md-block s">
            <h5>Nueva promocion</h5>
            <p>Precio o promocion producto</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/nuevosHome/vino1.jpg" alt="Second slide" />
          <div class="carousel-caption d-none d-md-block s">
            <h5>Ofertas de navidad</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/nuevosHome/vino2.jpg" alt="Third slide" />
          <div class="carousel-caption d-none d-md-block s">
            <h5>Descuentos en productos</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- final carusel -->
    <div class="productosNuevos">
      <h5 class="New">
        Nuevos productos
        <hr class="line" />
      </h5>
      <p class="NewSub">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam aperiam
        <br />nemo voluptatem nam iure, maxime dolor iusto totam
      </p>
    </div>
    <div class="row cardNuevo">
      <app-nuevos v-for="vino in vinos" v-bind:key="vino.id"></app-nuevos>
    </div>
    <router-link to="/blog">
      <a href>
        <app-blog></app-blog>
      </a>
    </router-link>
    <app-test></app-test>
  </div>
</template>

<script>
import nuevos from "./Home/productosNuevos";
import blog from "./Home/seccionBlog";
import testimonios from "./Home/testimonios";
export default {
  data() {
    return {
      vinos: [
        { id: 1, name: "Cabernet", price: 110, category: "red" },
        { id: 2, name: "Malbec", price: 110, category: "red" },
        { id: 3, name: "Concha y TORO", price: 110, category: "blanco" },
        { id: 4, name: "Concha y TORO", price: 110, category: "blanco" },
      ],
    };
  },
  components: {
    appNuevos: nuevos,
    appBlog: blog,
    appTest: testimonios,
  },
};
</script>

<style scoped>
.carousel-item {
  height: 100vh;
}

@media (max-width: 768px) {
  .carousel-item {
    height: 50vh;
  }
}
.productosNuevos {
  width: 100%;
  text-align: center;
}
.New {
  padding-top: 3%;
  text-align: center;
  font: normal normal normal 36px/1.4em didot-w01-italic, serif;
  color: #242a35;
  background-color: white;
}
.NewSub {
  text-align: center;
  display: inline-block;
}
.cardNuevo {
  vertical-align: middle;
}
</style>