import { Component, OnInit } from '@angular/core';
import { SerieService } from '../../Servicio/serie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-locacion',
  templateUrl: './locacion.component.html',
  styleUrls: ['./locacion.component.css']
})
export class LocacionComponent implements OnInit {

  /**
   * @param locacion Objeto cuya informacion es de la locacion del personaje
   * @param data_cargada True cuando la data de personajes haya sido cargada. False cuando los datos se estan cargando
   */
  locacion: any;
  data_cargada = false;

  constructor(private servicio: SerieService, private activatedRoute: ActivatedRoute) { }

  /**
   * Se utiliza el activated Route para obtener el id de la locacion e inyectar el servicio que traerá la informacion de esa locacion
   * Posteriormente se cambia a TRUE data_cargada
   */
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // res variable tipo any en donde se almancera la informacion del servicio
      this.servicio.obtenerLocacion(params['id']).subscribe((res: any) =>{
        this.locacion = res;
        this.data_cargada = true;
      })
    });
  }

}
