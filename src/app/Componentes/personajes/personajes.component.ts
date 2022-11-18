import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from '../../Servicio/serie.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personaje: any;
  capitulos: any = [];
  data_cargada = false;

  constructor(private servicio: SerieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.servicio.obtenerPersonaje(params['id']).subscribe((res: any) =>{
        this.personaje = res;
        this.obtener_episodios();
      })
    });
  }

  obtener_episodios(){
    let id: any = [];
    let episodios_personaje = this.personaje.episode;

    for (let i = 0; episodios_personaje.length > i; i++){
      id.push(episodios_personaje[i].split('episode/').pop());
    }

    this.servicio.multiplesEpisodios( id ).subscribe((res: any) => {
      if ( res.length == undefined ){
        this.capitulos.push( res );
      } else {
        this.capitulos = res;
      }
      this.data_cargada = true;
    })
  }

}
