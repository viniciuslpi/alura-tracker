import { TipoNotificacao } from "@/interfaces/Notificacao";
import { NOTIFICAR } from "@/store/tipo-mutacoes";
import { store } from "@/store";

export const notificacaoMixin = {
    methods: {
        notificar(tipo: TipoNotificacao, titulo: string, descricao: string): void {
            store.commit(NOTIFICAR, { titulo, descricao, tipo });
        }
    }
}