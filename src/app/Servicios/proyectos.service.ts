import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../Modelos/Proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/proyectos';
   

    getProyecto(){
      return this.http.get<Proyecto[]>(this.Url+'/traer');
  }
  createProyecto(proyecto:Proyecto){
    return this.http.post<Proyecto>(this.Url+'/crear',proyecto);
  }
  getProyectoId(id:number){
    return this.http.get<Proyecto>(this.Url+"/"+id);
  }
  updateProyecto(proyecto:Proyecto){
    return this.http.put<Proyecto>(this.Url+"/editar/"+proyecto.id,proyecto);
  }
  deleteProyecto(proyecto:Proyecto){
    return this.http.delete<Proyecto>(this.Url+"/borrar/"+proyecto.id);
  }
}

