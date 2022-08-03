import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelos/Persona';
import { PersonaService } from 'src/app/Servicios/persona.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  persona: Persona = new Persona(0,"","","","");


  constructor(private router: Router, private service: PersonaService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {
    let id = localStorage.getItem("id");
    this.service.getPersonaId(+id)
      .subscribe(data => {
        this.persona = data;
      })
  }

  Cancel() {
    this.router.navigate(['home'])
  }

  obtener(e: any) {
    this.persona.img = e[0].base64;
    console.log(e);
  }

  Actualizar(persona: Persona) {
    this.service.updatePersona(persona)
      .subscribe(data => {
        this.persona = data;
        this.router.navigate(['home']);
      })
  }
}
