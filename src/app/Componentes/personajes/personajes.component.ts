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
    this.capitulos = this.personaje.episode;

    for (let i = 0; this.capitulos.length > i; i++){
      id.push(this.capitulos[i].split('episode/').pop());
    }

    this.servicio.multiplesEpisodios( id ).subscribe((res: any) => {
      this.capitulos = res;
    })
  }

}
