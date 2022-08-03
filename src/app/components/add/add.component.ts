import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelos/Persona';
import { PersonaService } from 'src/app/Servicios/persona.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  persona: Persona = new Persona (0, "", "", "", "");

  constructor(private route: Router, private service: PersonaService) { }

  ngOnInit(): void {
  }

  Guardar() {
    this.service.createPersona(this.persona).subscribe(data => { this.persona=data});
    this.route.navigate(['home']);
  }

  obtener(e: any) {
    this.persona.img = e[0].base64;
  }

  Cancel() {
    this.route.navigate(['home'])
  }
}
