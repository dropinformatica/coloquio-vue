<template>
<div id="app">
      <app-topo></app-topo>
      <app-info></app-info>
      <app-slide></app-slide>
      <app-form></app-form> 
  </div>
</template>

<script>
import Slide from "./components/Slide";
import Topo from "./components/Topo";
import Info from "./components/Info";
import Form from "./components/Form";


export default {
  name: "App",
  components: {
    "app-slide": Slide,
    "app-topo":Topo,
    "app-info":Info,
    "app-form":Form
  }
};
</script>


