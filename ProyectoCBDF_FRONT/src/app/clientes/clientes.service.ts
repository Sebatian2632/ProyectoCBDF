import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Respuesta } from './clientes.model';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {
  private urlAPI = "http://localhost:3000/socios/v1/clientes";

  constructor(private http:HttpClient) { }

  //Metodos
  //GET
  getAllClientes():Observable<Respuesta>{
    return this.http.get<Respuesta>(this.urlAPI);
  }

  //GETBYID
  getClienteById(id:number):Observable<Respuesta>{
    return this.http.get<Respuesta>(this.urlAPI+'/'+id);
  }

  //POST
  createCliente(categoria:object):Observable<Respuesta>{
    return this.http.post<Respuesta>(this.urlAPI, categoria);
  }
  //PUT
  updateCliente():void{

  }
  //DELETE
  deleteCliente(id:number):Observable<Respuesta>{
    return this.http.delete<Respuesta>(this.urlAPI+'/'+id);
  }
}
