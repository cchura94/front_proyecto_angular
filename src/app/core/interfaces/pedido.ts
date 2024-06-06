export interface Pedido {
    id?: number,
    fecha?: string,
    estado: number,
    observaciones?: string,
    cliente_id: number,
    productos: any[]
}
