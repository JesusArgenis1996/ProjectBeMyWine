import Home from "./components/Home.vue";
import biblioteca from "./components/blog/biblioteca.vue";
import catalogo from "./components/vino/catalogo.vue";

import contacto from "./components/informacion/contacto.vue";
import nosotros from "./components/informacion/nosotros.vue";
export const routes = [
  { path: "/", component: Home },
  { path: "/blog", component: biblioteca },
  { path: "/vinos", component: catalogo },
  { path: "/contacto", component: contacto },
  { path: "/nosotros", component: nosotros },
];
