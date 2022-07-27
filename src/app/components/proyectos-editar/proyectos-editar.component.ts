import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/Modelos/Proyectos';
import { ProyectosService } from 'src/app/Servicios/proyectos.service';

@Component({
  selector: 'app-proyectos-editar',
  templateUrl: './proyectos-editar.component.html',
  styleUrls: ['./proyectos-editar.component.css']
})
export class ProyectosEditarComponent implements OnInit {

  
 proyecto:Proyecto = new Proyecto(0,"","","");

  constructor( private route:Router, private service:ProyectosService ) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {
    let id = localStorage.getItem("id");
    this.service.getProyectoId(+id)
      .subscribe(data => {
        this.proyecto = data;
      })
  }

  Actualizar(proyecto: Proyecto) {
    this.service.updateProyecto(proyecto)
      .subscribe(data => {
        this.proyecto = data;
        window.location.reload();
      })
  }
}
