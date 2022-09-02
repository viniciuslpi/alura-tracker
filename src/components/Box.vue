<template>
  <div class="box has-text-weigth-bold">
    <slot></slot>
  </div>
</template>
<script land="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BoxComponent",
});
</script>
<style scoped>
    .box {
    background-color: #faf0ca;
    font-weight: 600;
    }
</style>