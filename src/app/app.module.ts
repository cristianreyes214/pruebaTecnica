// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Pipes
import { UltimoEpisodioPipe } from './Pipes/ultimo-episodio.pipe';
import { FavoritoActPipe } from './Pipes/favorito-act.pipe';

// Componentes
import { AppComponent } from './app.component';
import { PersonajesComponent } from './Componentes/personajes/personajes.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { LocacionComponent } from './Componentes/locacion/locacion.component';
import { NavegacionComponent } from './Compartidos/navegacion/navegacion.component';
import { FavoritosComponent } from './Componentes/favoritos/favoritos.component';
import { CargandoComponent } from './Compartidos/cargando/cargando.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    InicioComponent,
    LocacionComponent,
    UltimoEpisodioPipe,
    NavegacionComponent,
    FavoritosComponent,
    CargandoComponent,
    FavoritoActPipe
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
