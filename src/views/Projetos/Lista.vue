<template>
  <section>
    <router-link to="/novo" class="button">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Novo projeto</span>
    </router-link>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
          <td>
            <router-link :to="`/${projeto.id}`" class="button">
              <span class="icons is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </router-link>
            <button class="button ml-2 is-danger" @click="excluir(projeto.id)">
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import { EXCLUI_PROJETO } from "@/store/tipo-mutacoes";
import { TipoNotificacao } from "@/interfaces/Notificacao";
import useNotificador from "@/hooks/notificador";

export default defineComponent({
  name: "ListaComponent",
  methods: {
    excluir(id: string) {
      this.store.commit(EXCLUI_PROJETO, id);
      this.notificar(
        TipoNotificacao.FALHA,
        "Item Deletado!",
        "O projeto foi apagado com sucesso"
      );
    }
  },
  setup() {
    const store = useStore();
    const { notificar } = useNotificador();
    return { store, projetos: computed(() => store.state.projetos), notificar }
  }
});
</script>
