// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { PersonajesComponent } from './Componentes/personajes/personajes.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { LocacionComponent } from './Componentes/locacion/locacion.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    InicioComponent,
    LocacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }