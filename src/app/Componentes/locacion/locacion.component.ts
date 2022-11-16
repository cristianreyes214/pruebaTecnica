import { Component, OnInit } from '@angular/core';
import { SerieService } from '../../Servicio/serie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-locacion',
  templateUrl: './locacion.component.html',
  styleUrls: ['./locacion.component.css']
})
export class LocacionComponent implements OnInit {

  locacion: any;

  constructor(private servicio: SerieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.servicio.obtenerLocacion(params['id']).subscribe((res: any) =>{
        this.locacion = res;
        console.log(this.locacion);
      })
    });
  }

}
