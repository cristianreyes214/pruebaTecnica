import { Component, OnInit } from '@angular/core';
import { SerieService } from '../../Servicio/serie.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  personajes: any [] = [];

  constructor(private servicio:SerieService) {
    servicio.obtenerPersonajes().subscribe((res: any) => {
      this.personajes = res.results;
      console.log(res.results);
    })
  }

  ngOnInit(): void {
  }

}
