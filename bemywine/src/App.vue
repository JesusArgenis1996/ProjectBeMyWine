<template>
<div class=" l">
  <app-header></app-header>
  <transition name="slide" class="tran" mode="out-in">
    <router-view v-on:native="$scrollToTop" class="l"></router-view>
  </transition>
  <app-footer></app-footer> 
 
</div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components:{
    appHeader: Header,
    appFooter: Footer
  },
  methods: { 
           scrollToTop() {
                window.scrollTo(0,0);
           }
        }
}
</script>

<style scoped>
.l{
  overflow-x: hidden;
  padding: 0;
}

 .slide-enter-active{
   animation: slide-in 200ms ease-out forwards;

 }
 .slide-leave-active{
   animation: slide-out 200ms ease-out forwards;
 }
 @keyframes slide-in {
   from{
     transform: translateY(-30px);
     opacity: 0;
   }
   to{
     transform: translateY(0);
     opacity: 1;
   }
 }
 @keyframes slide-out {
   from{
     transform: translateY(0);
     opacity: 1;
   }
   to{
     transform: translateY(-30px);
     opacity: 0;
   }
   
 }
</style>

