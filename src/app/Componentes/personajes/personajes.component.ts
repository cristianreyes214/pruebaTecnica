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
  capitulos: any [] = [];

  constructor(private servicio: SerieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.servicio.obtenerPersonaje(params['id']).subscribe((res: any) =>{
        this.personaje = res;
        console.log(this.personaje);
      })
    });
  }

}
