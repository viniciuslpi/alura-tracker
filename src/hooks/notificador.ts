import { TipoNotificacao } from "@/interfaces/Notificacao"
import { store } from "@/store";
import { NOTIFICAR } from "@/store/tipo-mutacoes";

type Notificador = {
    notificar: (tipo: TipoNotificacao, titulo: string, descricao: string) => void
}

export default () : Notificador => {
    const notificar = (tipo: TipoNotificacao, titulo: string, descricao: string): void => {
        store.commit(NOTIFICAR, { titulo, descricao, tipo });
    }

    return { 
        notificar
    }
}