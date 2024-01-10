import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasService } from './proveedores.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-proveedores',
  styleUrls: ['./proveedores.component.css'],
  templateUrl: './proveedores.component.html',
})

export class ProveedoresComponent {

  proveedor = {
    id_proveedor:0, nombre:"", direccion:"", contacto:""
  }
  proveedoresArreglo = [
    {id_proveedor:0, nombre:"", direccion:"", contacto:""}
  ]
  
  constructor(private servicioCategorias:CategoriasService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //Cuando ya todos los elementos estan cargados - OnLoad, jquery
    this.consultarTodasLasCategorias();
  }

  //Este método consume el servicio 
  consultarTodasLasCategorias() {
    this.servicioCategorias.getAllCategorias().subscribe({
      next: (v) => {
        if (v.proveedores) {
          this.proveedoresArreglo = v.proveedores; // Ajusta aquí
        } else {
          console.error("Error: La respuesta no contiene la propiedad 'categoria'", v);
          // Puedes mostrar un mensaje al usuario informando sobre el problema
        }
      },
      error: (e) => {
        console.error("Error en la solicitud:", e);
        // Puedes mostrar un mensaje al usuario informando sobre el problema
      },
      complete: () => console.info("Se completa la llamada: Si hay error o no"),
    });
  }
   
agregarCategoria() {
  if (this.proveedor.contacto !== undefined && this.proveedor.direccion !== undefined && this.proveedor.nombre !== undefined) {
    // Creamos una copia de la categoría sin vínculos
    const categoriaSinVincular = { ...this.proveedor };

    // Suscribirse al servicio para crear la categoría
    this.servicioCategorias.createCategoria(categoriaSinVincular).subscribe({
      next: (resAPI) => {
        console.log('Respuesta del servicio:', resAPI); // Agrega esta línea para imprimir la respuesta

        // Verificamos el estado de la respuesta del servicio
        if (resAPI && resAPI.estado === 1 && resAPI.proveedores && resAPI.proveedores[0]) {
          // Actualizamos el ID de la categoría con el ID devuelto por el servicio
          categoriaSinVincular.id_proveedor = resAPI.proveedores[0].id_proveedor || 0;

          // Agregamos la categoría al arreglo en la vista
          this.proveedoresArreglo.push(categoriaSinVincular);

          // Limpiamos la categoría actual
          this.proveedor = { id_proveedor: 0, nombre: "", direccion: "", contacto:""};
        }
      },
      error: (error) => {
        console.error(error);
        // Mostramos un mensaje de error en caso de problemas de comunicación
        alert("Error de comunicación al agregar la categoría.");
      },
      complete: () => console.info("Llamada de creación completada."),
    });
  } else {
    // Mostramos un mensaje de error si los datos no son válidos
    alert("Error: Verifica tus datos");
  }
  alert("Agregado correctamente");
  this.consultarTodasLasCategorias()
}

  

  eliminarCategoria(id:number){
    if(confirm("Estas seguro de que deseas eliminar el registro?")){
      this.servicioCategorias.deleteCategoria(id).subscribe({
        next:(respuesta) => {
          if(respuesta.estado==1){
            const posId = this.proveedoresArreglo.findIndex((proveedor)=>proveedor.id_proveedor==id)
            this.proveedoresArreglo.splice(posId,1)
            alert(respuesta.mensaje)
          }else{
            alert(respuesta.mensaje)
          }
        },
        error:(error)=> console.error("error"+error),
        complete:() => console.info("completado")
      })

    }
  }

//Para saber qué categoria actualizar
  seleccionarCategoria(categoriaSeleccionada : {id_proveedor:number, nombre:string, direccion:string, contacto:string}){
    this.proveedor.id_proveedor = categoriaSeleccionada.id_proveedor;
    this.proveedor.nombre = categoriaSeleccionada.nombre;
    this.proveedor.direccion = categoriaSeleccionada.direccion;
    this.proveedor.contacto = categoriaSeleccionada.contacto;
  }

// Para actualizar la categoria seleccionada
actualizarCategoria() {
  const idActualizar = this.proveedoresArreglo.findIndex((cat) => cat.id_proveedor == this.proveedor.id_proveedor);

  if (idActualizar !== -1) {
    // Actualizamos la categoría en la vista
    this.proveedoresArreglo[idActualizar].nombre = this.proveedor.nombre;
    this.proveedoresArreglo[idActualizar].direccion = this.proveedor.direccion;
    this.proveedoresArreglo[idActualizar].contacto = this.proveedor.contacto;

    // Llamamos al servicio para actualizar la categoría en la base de datos
    this.servicioCategorias.updateCategoria(this.proveedor.id_proveedor, this.proveedor).subscribe({
      next: (resAPI) => {
        if (resAPI.estado == 1) {
          alert(resAPI.mensaje);
        } else {
          // Si hay un error en la respuesta del servicio, puedes manejarlo aquí
          alert("Error al actualizar la categoría: " + resAPI.mensaje);
        }
      },
      error: (error) => {
        console.error(error);
        // Puedes manejar el error de comunicación aquí
        alert("Error de comunicación al actualizar la categoría.");
      },
      complete: () => console.info("Llamada de actualización completada."),
    });
  } else {
    alert("Error: La categoría no existe en el arreglo.");
  }
}

}
