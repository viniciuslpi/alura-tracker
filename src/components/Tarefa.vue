<template>
    <div class="box has-text-weigth-bold">
        <div class="columns">
            <div class="column is-7">
                Descricao da tarefa
            </div>
            <div class="column">
                <Cronometro />
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Cronometro from "./Cronometro.vue"


export default defineComponent({
    name: "TarefaComponent",
    components: {
        Cronometro
    }
})
</script>
