import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelos/Persona';
import { PersonaService } from 'src/app/Servicios/persona.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  personas: Persona[] = [];
 
  persona: Persona = new Persona (0, "", "", "", "");



  constructor(private router: Router, private service: PersonaService) { }
  ngOnInit(): void {  
    this.service.getPersona()
      .subscribe(data => {
        this.personas = data;
      })
  }
  
  

  Editar(persona: Persona): void {
    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(['editar'])
  }


  Agregar() {
    this.router.navigate(['add'])
}




  Delete(persona: Persona) {
    this.service.deletePersona(persona)
      .subscribe(data => {
        this.personas = this.personas.filter(p => p !== persona);
        alert("Usuario eliminado...");
      })
  }
}
