<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="mudarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <Formulario @aoSalvarTarefa="salvarTarefa" />
      <div class="lista">
        <Tarefa
          v-for="(tarefa, index) in tarefas"
          :key="index"
          :tarefa="tarefa"
        />
        <Box v-if="listaEstaVazia"> Você não está muito produtivo hoje :/ </Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import Formulario from "./components/Formulario.vue";
import Tarefa from "./components/Tarefa.vue";
import Box from "./components/Box.vue";

import Tarefas from "./interfaces/Tarefas";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    Formulario,
    Tarefa,
    Box,
  },
  data() {
    return {
      tarefas: [] as Tarefas[],
      modoEscuroAtivo: false
    };
  },
  computed: {
    listaEstaVazia () :boolean {
      return this.tarefas.length === 0;
    }
  },
  methods: {
    salvarTarefa(tarefa: Tarefas) {
      this.tarefas.push(tarefa);
    },
    mudarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo;
    }
  },
});
</script>

<style>
.lista {
  padding: 1em;
}

  main {
    --bg-primario: #fff;
    --texto-primario: #000;
  }

  main.modo-escuro {
    --bg-primario: #2b2d42;
    --texto-primario: #ddd;
  } 

  .conteudo {
    background-color: var(--bg-primario);
  }

</style>
