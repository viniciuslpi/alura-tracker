import Projeto from "@/interfaces/Projeto";
import { Notificacao, TipoNotificacao  } from "@/interfaces/Notificacao";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUI_PROJETO } from "./tipo-mutacoes";


interface Estado {
    projetos: Projeto[],
    notificacoes: Notificacao[]
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
    state: {
        projetos: [],
        notificacoes: [
            {
                id: 1,
                descricao: "DEU BOM FILHAAAAO",
                titulo: 'Sucesso',
                tipo: TipoNotificacao.SUCESSO
            }
        ]
    },
    mutations: {
        [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as Projeto
            state.projetos.push(projeto)
        },
        [ALTERA_PROJETO](state, projeto: Projeto) {
            const index = state.projetos.findIndex(proj => proj.id == projeto.id);
            state.projetos[index] = projeto
        },
        [EXCLUI_PROJETO](state, id: string) {
            state.projetos = state.projetos.filter(proj => proj.id != id)
        }
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}