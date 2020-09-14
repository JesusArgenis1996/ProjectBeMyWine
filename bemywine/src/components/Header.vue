<template>
  <nav class="navbar navbar-expand-md navbar-dark fondo2 fixed-top" v-bind:class="{fondo: cambio}">
    <router-link to="/" class="nav logo">
      <img class="l" src="../assets/logo.png" />
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="true"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Primera Columna -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/vinos">
            <a class="nav-link text-light" href="#">Vinos</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/blog">
            <a class="nav-link text-light" href="#">Blog</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/nosotros">
            <a class="nav-link text-light" href="#">Nosotros</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contacto">
            <a class="nav-link text-light" href="#">Contacto</a>
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img class="logoRedes" src="../assets/redes/facebook.webp" />
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img class="logoRedes" src="../assets/redes/instagram.webp" />
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Carro</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      windowTop: 0,
      cambio: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.windowTop =
        window.top.scrollY; /* or: e.target.documentElement.scrollTop */
      if (this.windowTop > 0) {
        this.cambio = true;
      } else {
        this.cambio = false;
      }
    },
  },
};
</script>
<style scoped>
.router {
  margin: 0;
  padding: 0;
}
@media (min-width: 768px) {
  .logo {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .navbar {
    height: 10%;
  }
}
@media (max-width: 768px) {
  .logo {
    position: relative;
  }
  .boton {
    float: right;
  }
  .fondo2 {
    background-image: url("../assets/diseno/fondo.png");
  }
}
.fondo {
  background-image: url("../assets/diseno/fondo.png");
}
.l {
  width: 10px;
  height: 40px;
}
.logoRedes {
  width: 20px;
  height: 20px;
}
</style>