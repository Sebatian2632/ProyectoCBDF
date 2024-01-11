export interface Cliente{
  id:number,
  nombre:string,
  direccion:string,
  contacto:string
}

export interface Respuesta{
  estado:number,
  mensaje:string,
  clientes:Cliente[]
}
