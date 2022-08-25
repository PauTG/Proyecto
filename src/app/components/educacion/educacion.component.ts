import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/Modelos/Estudio';
import { EstudioService } from 'src/app/Servicios/estudio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  estudios: Estudio[] = [];
  estudio: Estudio = new Estudio (0, "", "", ""); 

  constructor( private route: Router, private service: EstudioService) { }

  ngOnInit(): void {
 this.service.getEstudio()
 .subscribe(data => { 
  this.estudios = data
  ;
  })
}


Editar (estudio: Estudio): void {
localStorage.setItem("id", estudio.id.toString());
this.route.navigate (['estudio-edit'])
}


Agregar() {
  this.route.navigate(['educacion-add'])
}
  
Delete (estudio: Estudio){
this.service.deleteEstudio(estudio)
.subscribe(data => {
  this.estudios = this.estudios.filter (p => p !== estudio);
})
}
}



