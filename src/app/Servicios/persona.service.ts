import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../Modelos/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }

  Url='https://paulag.herokuapp.com/personas';

    getPersona(){
      return this.http.get<Persona[]>(this.Url+'/traer');
  }
  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url+'/crear',persona);
  }
  getPersonaId(id:number){
    return this.http.get<Persona>(this.Url+"/"+id);
  }
  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/editar/"+persona.id,persona);
  }
  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.Url+"/borrar/"+persona.id);
  }
}