import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/Modelos/Proyectos';
import { ProyectosService } from 'src/app/Servicios/proyectos.service';

@Component({
  selector: 'app-proyectos-add',
  templateUrl: './proyectos-add.component.html',
  styleUrls: ['./proyectos-add.component.css']
})
export class ProyectosAddComponent implements OnInit {

  proyecto: Proyecto = new Proyecto(0,"","","");

  constructor( private route:Router, private service:ProyectosService ) { }

  ngOnInit(): void {
  }

  Guardar() {
    this.service.createProyecto(this.proyecto).subscribe(data => {});
    window.location.reload();
    this.route.navigate[('home')];
  }
}
