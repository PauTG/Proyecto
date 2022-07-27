import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { SocialComponent } from './components/social/social.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ModalesComponent } from './components/modales/modales.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './components/hys/hys.component';
import{ HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionAddComponent } from './components/educacion-add/educacion-add.component';
import { EducacionEditComponent } from './components/educacion-edit/educacion-edit.component';
import { ProyectosAddComponent } from './components/proyectos-add/proyectos-add.component';
import { ProyectosEditarComponent } from './components/proyectos-editar/proyectos-editar.component';
import { ExperienciaAddComponent } from './components/experiencia-add/experiencia-add.component';
import { ExperienciaEditComponent } from './components/experiencia-edit/experiencia-edit.component';
import { AddComponent } from './components/add/add.component';
import { EditarComponent } from './components/editar/editar.component';
import { HysAddComponent } from './components/hys-add/hys-add.component';
import { HysEditComponent } from './components/hys-edit/hys-edit.component';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    LogoApComponent,
    SocialComponent,
    AcercaDeComponent,
    ModalesComponent,
    HysComponent,
    ProyectosComponent,
    EducacionComponent,
    ExperienciaComponent,
    EducacionAddComponent,
    EducacionEditComponent,
    ProyectosAddComponent,
    ProyectosEditarComponent,
    ExperienciaAddComponent,
    ExperienciaEditComponent,
    AddComponent,
    EditarComponent,
    HysAddComponent,
    HysEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    AlifeFileToBase64Module    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
