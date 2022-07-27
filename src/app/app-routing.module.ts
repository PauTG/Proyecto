import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysAddComponent } from './components/hys-add/hys-add.component';
import { HysEditComponent } from './components/hys-edit/hys-edit.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'home', component:MainComponent},
  {path:'hys-add',component:HysAddComponent},
  {path:'hys-edit',component:HysEditComponent},
  {path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgCircleProgressModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }