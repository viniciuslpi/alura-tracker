<template>
    <div class="box has-text-weigth-bold">
        <div class="columns">
            <div class="column is-7">
                {{ tarefa.descricao }}
            </div>
            <div class="column">
                <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Cronometro from "./Cronometro.vue"
import Tarefas from '../interfaces/Tarefas'


export default defineComponent({
    name: "TarefaComponent",
    components: {
        Cronometro
    },
    props: {
        tarefa: {
            type: Object as PropType<Tarefas>,
            required: true
        }
    }
})
</script>
<style scoped>
    .box {
        background-color: #FAF0CA;
    }
</style>