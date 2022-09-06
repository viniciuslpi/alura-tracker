import Projeto from "@/interfaces/Projeto";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

interface Estado {
    projetos: Projeto[]
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
    state: {
        projetos: [
            {
                id: new Date().toISOString(),
                nome: 'TypeScript'
            },
            {
                id: new Date().toISOString(),
                nome: 'Vue'
            },
            {
                id: new Date().toISOString(),
                nome: 'Vuex'
            }
        ]
    }
})