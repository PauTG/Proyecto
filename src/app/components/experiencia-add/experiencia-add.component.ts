import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/Modelos/Experiencia';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';

@Component({
  selector: 'app-experiencia-add',
  templateUrl: './experiencia-add.component.html',
  styleUrls: ['./experiencia-add.component.css']
})
export class ExperienciaAddComponent implements OnInit {

  experiencia: Experiencia = new Experiencia (0, "", "", "");

  constructor(private route: Router, private service: ExperienciaService) { }

  ngOnInit(): void {
  }

Guardar() {
  this.service.createExperiencia(this.experiencia).subscribe(data => {});
  this.route.navigate(['home']);
}

Cancel() {
  this.route.navigate (['home'])
}



}
