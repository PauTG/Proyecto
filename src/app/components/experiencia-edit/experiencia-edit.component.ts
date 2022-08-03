import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/Modelos/Experiencia';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';

@Component({
  selector: 'app-experiencia-edit',
  templateUrl: './experiencia-edit.component.html',
  styleUrls: ['./experiencia-edit.component.css']
})
export class ExperienciaEditComponent implements OnInit {

  experiencia: Experiencia = new Experiencia(0, "", "", "");


  constructor(private route: Router, private service: ExperienciaService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {
    let id = localStorage.getItem("id");
    this.service.getExperienciaId(+id)
      .subscribe(data => {
        this.experiencia = data;
      })
  }

  Actualizar(experiencia: Experiencia) {
    this.service.updateExperiencia(experiencia)
      .subscribe(data => {
        this.experiencia = data;
        window.location.reload();
      })
}
    Cancel() {
      this.route.navigate(['home'])
    }
  }
  