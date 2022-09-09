<template>
  <div class="projetos">
    <h2 class="title">Projetos</h2>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjetosComponent'
})
</script>
<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>