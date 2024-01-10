export interface Proveedor{
  id_proveedor:number,
  nombre:string,
  direccion:string,
  contacto:string
}

export interface Respuesta{
  estado:number,
  mensaje:string,
  proveedores:Proveedor[]
}
