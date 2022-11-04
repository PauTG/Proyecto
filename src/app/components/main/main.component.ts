import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelos/Persona';
import { PersonaService } from 'src/app/Servicios/persona.service';
import { TokenService } from 'src/app/Servicios/token.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  personas: Persona[] = [];
 
  persona: Persona = new Persona (0, "", "", "", "");
  isAdmin = false;
  roles: string[];


  constructor(private router: Router, private service: PersonaService , private tokenService: TokenService) { }
  ngOnInit(): void {  
    this.service.getPersona()
      .subscribe(data => {
        this.personas = data;
      })
      this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }
  
  

  Editar(persona: Persona): void {
    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(["editar"])
  }


  Agregar() {
    this.router.navigate(["add"])
}




  Delete(persona: Persona) {
    this.service.deletePersona(persona)
      .subscribe(data => {
        this.personas = this.personas.filter(p => p !== persona);
        alert("Usuario eliminado...");
      })
  }
}
