import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/Modelos/Proyectos';
import { ProyectosService } from 'src/app/Servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})



export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[] = [];
  proyecto: Proyecto = new Proyecto(0, "", "", "");

  constructor(private router: Router, private service: ProyectosService) { }

  ngOnInit(): void {
    this.service.getProyecto()
      .subscribe(data => {
        this.proyectos = data
          ;
      })
  }

  Nuevo() {
    this.router.navigate(['proyectos-add']);
  }



  Editar(proyecto: Proyecto): void {
    localStorage.setItem("id", proyecto.id.toString());
    this.router.navigate(['proyectos-edit'])
  }

  Delete(proyecto: Proyecto) {
    this.service.deleteProyecto(proyecto)
      .subscribe(data => {
        this.proyectos = this.proyectos.filter(p => p !== proyecto);
      })
  }
}