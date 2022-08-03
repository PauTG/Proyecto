import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/Modelos/Skill';
import { SkillService } from 'src/app/Servicios/skill.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {

skills:Skill[]=[];
skill: Skill = new Skill(0,"",0,"");

  constructor(private router: Router, private service: SkillService) { }

  ngOnInit(): void {
    this.service.getSkill()
      .subscribe(data => {
        this.skills = data
        ;
      })
  }

  Nuevo(){
    this.router.navigate(['hys-add']);
  }

  

  Editar(skill: Skill): void {
    localStorage.setItem("id", skill.id.toString());
    this.router.navigate(['hys-edit'])
  }

  Delete(skill: Skill) {
    this.service.deleteSkill(skill)
      .subscribe(data => {
        this.skills = this.skills.filter(p => p !== skill);
      })
  }
}
