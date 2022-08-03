import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LoginComponent } from './auth/login/login.component';
import { HysAddComponent } from './components/hys-add/hys-add.component';
import { HysEditComponent } from './components/hys-edit/hys-edit.component';
import { MainComponent } from './components/main/main.component';
import { LoginUsuario } from './Modelos/login-usuario';
import { PersonaGuardService as guard } from './guards/persona-guard.service';
import { AddComponent } from './components/add/add.component';
import { EditarComponent } from './components/editar/editar.component';
import { combineLatest } from 'rxjs';
import { ProyectosEditarComponent } from './components/proyectos-editar/proyectos-editar.component';
import { ProyectosAddComponent } from './components/proyectos-add/proyectos-add.component';
import { ExperienciaEditComponent } from './components/experiencia-edit/experiencia-edit.component';
import { ExperienciaAddComponent } from './components/experiencia-add/experiencia-add.component';
import { EducacionAddComponent } from './components/educacion-add/educacion-add.component';
import { EducacionEditComponent } from './components/educacion-edit/educacion-edit.component';


const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'home', component:MainComponent},
  {path:'hys-add',component:HysAddComponent, canActivate: [guard], data: {expectedRol:['admin']}},
  {path:'hys-edit',component:HysEditComponent, canActivate: [guard], data: {expectedRol:['admin']}},
  {path: 'Login',component: LoginComponent},
  {path:'add',component: AddComponent, canActivate: [guard], data: {expectedRol: ['admin']}},
  {path: 'editar' , component: EditarComponent, canActivate: [guard], data: {expectedRol: ['admin']}},
  {path: 'proyectos-edit' , component: ProyectosEditarComponent, canActivate: [guard] , data: {expectedRol: ['admin']  }  },
  {path: 'proyectos-add' , component: ProyectosAddComponent, canActivate: [guard] , data: {expectedRol: ['admin']} },
  {path: 'experiencia-edit', component: ExperienciaEditComponent, canActivate: [guard], data: {expectedRol: ['admin']}},
  {path: 'experiencia-add', component: ExperienciaAddComponent, canActivate: [guard], data: {expectedRol: ['admin']}},
  {path: 'educacion-add', component: EducacionAddComponent, canActivate: [guard], data: {expectedRol: ['admin']}},
  {path: 'estudio-edit', component: EducacionEditComponent, canActivate: [guard], data: {expectedRol: ['admin']}},
  {path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgCircleProgressModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }