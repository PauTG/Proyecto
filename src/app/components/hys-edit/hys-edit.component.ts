import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/Modelos/Skill';
import { SkillService } from 'src/app/Servicios/skill.service';

@Component({
  selector: 'app-hys-edit',
  templateUrl: './hys-edit.component.html',
  styleUrls: ['./hys-edit.component.css']
})
export class HysEditComponent implements OnInit {
  
  skill: Skill = new Skill(0,"",0,"");


  constructor(private router: Router, private service: SkillService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {
    let id = localStorage.getItem("id");
    this.service.getSkillId(+id)
      .subscribe(data => {
        this.skill = data;
      })
  }

  Cancel() {
    this.router.navigate(['home'])
  }

  obtener(e: any) {
    this.skill.img = e[0].base64;
  }

  Actualizar(skill: Skill) {
    this.service.updateSkill(skill)
      .subscribe(data => {
        this.skill = data;
        this.router.navigate(['home']);
      })
  }
}
