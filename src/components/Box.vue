<template>
  <div class="box has-text-weigth-bold" :style="estilos">
    <slot></slot>
  </div>
</template>
<script land="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BoxComponent",
  data() {
    return {
      estilos: {
        backgroundColor: '#FAF0CA'
      }
    }
  }
});
</script>
