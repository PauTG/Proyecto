import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/Modelos/Estudio';
import { EstudioService } from 'src/app/Servicios/estudio.service';

@Component({
  selector: 'app-educacion-add',
  templateUrl: './educacion-add.component.html',
  styleUrls: ['./educacion-add.component.css']
})
export class EducacionAddComponent implements OnInit {

  estudio: Estudio = new Estudio(0, "", "", "");

  constructor(private route: Router, private service: EstudioService) { }

  ngOnInit(): void {
  }

  Guardar() {
    this.service.createEstudio(this.estudio).subscribe(data => { this.estudio=data});
    this.route.navigate(['home']);
  }


  Cancel() {
    this.route.navigate(['home'])
  }
}
