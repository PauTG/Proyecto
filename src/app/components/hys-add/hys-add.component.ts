import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/Modelos/Skill';
import { SkillService } from 'src/app/Servicios/skill.service';

@Component({
  selector: 'app-hys-add',
  templateUrl: './hys-add.component.html',
  styleUrls: ['./hys-add.component.css']
})
export class HysAddComponent implements OnInit {

  skill: Skill = new Skill(0, "", 0, "");

  constructor(private route: Router, private service: SkillService) { }

  ngOnInit(): void {
  }

  Guardar() {
    this.service.createSkill(this.skill).subscribe(data => { });
    this.route.navigate[('home')];
  }

  obtener(e: any) {
    this.skill.img = e[0].base64;
  }

  Cancel() {
    this.route.navigate(['home'])
  }
}
