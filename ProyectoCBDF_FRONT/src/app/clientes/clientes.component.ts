import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers:[
    ClientesService
  ],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})

export class ClientesComponent {
  cliente = {id:0, nombre:"Cliente de ejemplo", direccion:"Texto de ejemplo", contacto: "XXXXXXXXXX"}

  clientes = [
    {id:1,nombre:"Ana Paola Rebolloso Saucedo", direccion:"Callejón del Moro #106 B", contacto: "1234567890"},
    {id:2,nombre:"Gerardo Rebolloso Saucedo", direccion:"Callejón del Moro #106 B", contacto: "1234567890"}
  ]

  //Pasamos el servicio
  constructor(private servicioClientes:ClientesService){
  }

  ngOnInit(): void {
    this.consultarTodosLosClientes();
  }

  consultarTodosLosClientes(){
    this.servicioClientes.getAllClientes().subscribe({
      next: (v) => {
        this.clientes = v.clientes
      },
      error: (e) => console.error("Error: ",e),
      complete: () => console.info('Se completa la llama: Si hay error o no')
    })
  }

  agregarCliente(formularioCliente: NgForm) {
    if (formularioCliente.valid) {
        const clienteSinVincular={
          id:this.cliente.id,
          nombre:this.cliente.nombre,
          direccion:this.cliente.direccion,
          contacto:this.cliente.contacto
        }
        this.servicioClientes.createCliente(clienteSinVincular).subscribe({
          next: (resAPI) => {
            if(resAPI.estado==1){
              clienteSinVincular.id = resAPI.clientes[0].id;
              this.cliente.id = resAPI.clientes[0].id;
              this.clientes.push(clienteSinVincular);
              this.consultarTodosLosClientes();
              alert(resAPI.mensaje);
            }else{
              alert(resAPI.mensaje)
            }
          },
          error: (error) => console.error("Error: ",error),
          complete: () => console.info('Solicitud completada')
        })
    }else{
      alert("Error: Verifica tus datos");
    }
  }

  eliminarCliente(id:number){
    if(confirm("Esta seguro de que desea eliminar el registro")){
      this.servicioClientes.deleteCliente(id).subscribe({
        next:(res)=>{
          if(res.estado==1){
            const posId=this.clientes.findIndex((cliente)=>cliente.id==id)
            this.clientes.splice(posId,1)
            alert(res.mensaje)
          }else{
            alert(res.mensaje)
          }
        },
        error:(error)=>console.error(error),
        complete:()=>console.info('Se completo la solicitud')
      })
    }
  }
}