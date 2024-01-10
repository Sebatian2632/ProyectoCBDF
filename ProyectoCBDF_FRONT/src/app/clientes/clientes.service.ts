import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Respuesta } from './clientes.model';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {
  private urlAPI = "http://localhost:3000/socios/v2/clientes";

  constructor(private http:HttpClient) { }

  //Metodos
  //GET
  getAllCategorias():Observable<Respuesta>{
    return this.http.get<Respuesta>(this.urlAPI);
  }

  //GETBYID
  getCategoriaById(id:number):Observable<Respuesta>{
    return this.http.get<Respuesta>(this.urlAPI+'/'+id);
  }

  //POST
  createCategoria(categoria:object):Observable<Respuesta>{
    return this.http.post<Respuesta>(this.urlAPI, categoria);
  }
  //PUT
  updateCategoria():void{

  }
  //DELETE
  deleteCategoria(id:number):Observable<Respuesta>{
    return this.http.get<Respuesta>(this.urlAPI);
  }
}
