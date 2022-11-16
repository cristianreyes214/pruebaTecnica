import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { PersonajesComponent } from './Componentes/personajes/personajes.component';
import { LocacionComponent } from './Componentes/locacion/locacion.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'personaje/:id', component: PersonajesComponent },
  { path: 'locacion/:id', component: LocacionComponent },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
