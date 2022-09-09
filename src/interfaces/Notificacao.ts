export enum TipoNotificacao {
    SUCESSO, 
    FALHA,
    ATENCAO
}

export interface Notificacao {
    id: number
    descricao: string,
    titulo: string,
    tipo: TipoNotificacao,
}