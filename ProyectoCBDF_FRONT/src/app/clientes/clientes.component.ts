import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

}