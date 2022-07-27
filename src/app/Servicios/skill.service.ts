import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../Modelos/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  Url='http://localhost:8080/skills';
  URL='https://porfolioargentino.herokuapp.com/skills';

  getSkill(){
    return this.http.get<Skill[]>(this.Url+'/traer');
}
createSkill(skill:Skill){
  return this.http.post<Skill>(this.Url+'/crear',skill);
}
getSkillId(id:number){
  return this.http.get<Skill>(this.Url+"/"+id);
}
updateSkill(skill:Skill){
  return this.http.put<Skill>(this.Url+"/editar/"+skill.id,skill);
}
deleteSkill(skill:Skill){
  return this.http.delete<Skill>(this.Url+"/borrar/"+skill.id);
}
}
