import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/Modelos/Estudio';
import { EstudioService } from 'src/app/Servicios/estudio.service';
import { TokenService } from 'src/app/Servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  estudios: Estudio[] = [];
  estudio: Estudio = new Estudio(0, "", "", "");
  isAdmin = false;
  roles: string[];

  constructor(private route: Router, private service: EstudioService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.service.getEstudio()
      .subscribe(data => {
        this.estudios = data
          ;
      })
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }


  Editar(estudio: Estudio): void {
    localStorage.setItem("id", estudio.id.toString());
    this.route.navigate(['estudio-edit'])
  }


  Agregar() {
    this.route.navigate(['educacion-add'])
  }

  Delete(estudio: Estudio) {
    this.service.deleteEstudio(estudio)
      .subscribe(data => {
        this.estudios = this.estudios.filter(p => p !== estudio);
      })
  }
}



