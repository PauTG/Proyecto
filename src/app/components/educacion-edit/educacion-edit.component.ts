import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/Modelos/Estudio';
import { EstudioService } from 'src/app/Servicios/estudio.service';

@Component({
  selector: 'app-educacion-edit',
  templateUrl: './educacion-edit.component.html',
  styleUrls: ['./educacion-edit.component.css']
})
export class EducacionEditComponent implements OnInit {

  estudio: Estudio = new Estudio(0,"","","");

  constructor(private router: Router, private service: EstudioService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {
    let id = localStorage.getItem("id");
    this.service.getEstudioId(+id)
      .subscribe(data => {
        this.estudio = data;
      })
  }

  Cancel() {
    this.router.navigate(['home'])
  }

  

  Actualizar(estudio: Estudio) {
    this.service.updateEstudio(estudio)
      .subscribe(data => {
        this.estudio = data;
        this.router.navigate(['home']);
      })
  }
}
