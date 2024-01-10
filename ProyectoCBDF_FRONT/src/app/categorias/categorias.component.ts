import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers:[
    CategoriasService
  ],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})

export class CategoriasComponent {
  categoria = {id:0, nombre:"Cate de ejemplo", descripcion:"Texto de ejemplo"}

  categorias = [
    {id:55,nombre:"Zapateria",  descripcion:"Todo lo relacionado con zapatos"},
    {id:88,nombre:"Pesca",      descripcion:"Todo los relacionados con la Pesca"},
    {id:9, nombre:"Deportes",   descripcion:"Todo lo relacionado con deportes"},
    {id:4, nombre:"Hogar",      descripcion:"Todo lo relacionado con Hogar"},
    {id:34,nombre:"Electronica",descripcion:"Todo lo relacionado con pantallas y laptops"}
  ]

  //Pasamos el servicio
  constructor(private servicioCategorias:CategoriasService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //Cuando ya todos los elementos estan cargados - OnLoad, jquery
    this.consultarTodasLasCategorias();
  }

  eliminarCategoria(id:number){
    if(confirm("Esta seguro de que desea eliminar el registro")){
      this.servicioCategorias.deleteCategoria(id).subscribe({
        next:(res)=>{
          if(res.estado==1){
            const posId=this.categorias.findIndex((categoria)=>categoria.id==id)
            this.categorias.splice(posId,1)
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

  //Este metodo consume el servicio - NETFLIX, PRIME VIDEO = Suscripcion
  consultarTodasLasCategorias(){
    this.servicioCategorias.getAllCategorias().subscribe({
      next: (v) => {
        this.categorias = v.categorias
      },
      error: (e) => console.error("Error: ",e),
      complete: () => console.info('Se completa la llama: Si hay error o no')
    })

  }

  agregarCategoria(){
    const posId=this.categorias.findIndex((cat)=>cat.id==this.categoria.id);
    if(this.categoria.id>0 && posId==-1){
        const categoriaSinVincular={
          id:this.categoria.id,
          nombre:this.categoria.nombre,
          descripcion:this.categoria.descripcion
        }
        this.servicioCategorias.createCategoria(categoriaSinVincular).subscribe({
          next: (resAPI) => {
            if(resAPI.estado==1){
              categoriaSinVincular.id = resAPI.categorias[0].id;
              this.categoria.id = resAPI.categorias[0].id;
              this.categorias.push(categoriaSinVincular);
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



  seleccionarCategoria(categoriaSeleccionada:{id:number,nombre:string,descripcion:string}){//Para saber que categoria actualizar
    this.categoria.id         =categoriaSeleccionada.id;
    this.categoria.nombre     =categoriaSeleccionada.nombre;
    this.categoria.descripcion=categoriaSeleccionada.descripcion;
  }

  actualizarCategoria(){//Para actualizar la categoria seleccionada
    const idActualizar = this.categorias.findIndex((cat)=>cat.id==this.categoria.id);
    if(idActualizar!=-1){
      this.categorias[idActualizar].id          = this.categoria.id;
      this.categorias[idActualizar].nombre      = this.categoria.nombre;
      this.categorias[idActualizar].descripcion = this.categoria.descripcion;
    }else
      alert("Registro no encontrado");
    }
}