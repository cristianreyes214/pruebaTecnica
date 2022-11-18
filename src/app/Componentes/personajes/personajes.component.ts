import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from '../../Servicio/serie.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  /**
   * @param personaje objeto donde se almacena la informacion del personaje
   * @param capitulos Array de lista de episodios del personaje
   * @param data_cargada True cuando la data de personajes haya sido cargada. False cuando los datos se estan cargando
   */
  personaje: any;
  capitulos: any = [];
  data_cargada = false;

  constructor(private servicio: SerieService, private activatedRoute: ActivatedRoute) { }

  /**
   * Mediante el Activated Route se obtiene el id del personaje, con el se inyecta el servicio
   * Se almacena la informacion en la variable personaje
   * Posteriormente se buscan los episodios asociados al personaje
   */
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.servicio.obtenerPersonaje(params['id']).subscribe((res: any) =>{
        this.personaje = res;
        this.obtener_episodios();
      })
    });
  }

  /**
   * Según los episodios donde el personaje tiene participacion, se crea una lista de id de cada episodio para:
   * obtener nombre, fecha, entre otros detalles del episodio
   * Finalmente se cambia estado de la variable data_cargada.
   */
  obtener_episodios(){
    let id: any = [];
    let episodios_personaje = this.personaje.episode;

    for (let i = 0; episodios_personaje.length > i; i++){
      // obtener id de cada episodio
      id.push(episodios_personaje[i].split('episode/').pop());
    }

    this.servicio.multiplesEpisodios( id ).subscribe((res: any) => {
      // Cuando solo hay un episodio
      if ( res.length == undefined ){
        this.capitulos.push( res );
      } else {
        // Cuando hay una lista de episodios
        this.capitulos = res;
      }
      this.data_cargada = true;
    })
  }

}
