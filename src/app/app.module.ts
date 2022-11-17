// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Pipes
import { UltimoEpisodioPipe } from './Pipes/ultimo-episodio.pipe';

// Componentes
import { AppComponent } from './app.component';
import { PersonajesComponent } from './Componentes/personajes/personajes.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { LocacionComponent } from './Componentes/locacion/locacion.component';
import { NavegacionComponent } from './Compartidos/navegacion/navegacion.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    InicioComponent,
    LocacionComponent,
    UltimoEpisodioPipe,
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
