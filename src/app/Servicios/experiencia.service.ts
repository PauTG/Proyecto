import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from '../Modelos/Experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {


  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/experiencias';

    getExperiencia(){
      return this.http.get<Experiencia[]>(this.Url+'/traer');
  }
  createExperiencia(experiencia:Experiencia){
    return this.http.post<Experiencia>(this.Url+'/crear',experiencia);
  }
  getExperienciaId(id:number){
    return this.http.get<Experiencia>(this.Url+"/"+id);
  }
  updateExperiencia(experiencia:Experiencia){
    return this.http.put<Experiencia>(this.Url+"/editar/"+experiencia.id,experiencia);
  }
  deleteExperiencia(experiencia:Experiencia){
    return this.http.delete<Experiencia>(this.Url+"/borrar/"+experiencia.id);
  }
}

