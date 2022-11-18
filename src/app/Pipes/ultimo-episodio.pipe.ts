import { Pipe, PipeTransform } from '@angular/core';
import { SerieService } from '../Servicio/serie.service';

@Pipe({
  name: 'ultimoEpisodio'
})
export class UltimoEpisodioPipe implements PipeTransform {

  constructor(private servicio:SerieService){}

  /**
   * Filtrar informacion de los personajes para encontrar toda la data del ultimo episodio y ultima locacion de cada personaje
   * @param datos array de lista de cada personaje
   * @returns array de lista de cada personaje con ultima locacion y ultimo episodio
   */
  transform( datos: any ): string {
    for ( let i = 0; datos.length > i; i++ ){
      // Se obtiene ultimo capitulo del personaje
      const posicion = datos[i].episode.length-1;
      const id = datos[i].episode[posicion].split('episode/').pop();

      // Una vez se obtiene la data del episonio, lo reemplazamos para mostrar únicamente el nombre del episodio
      this.servicio.filtrarEpisodio( id, datos[i].name ).subscribe(( res: any ) => {
        datos[i].episode = res.name;
      });

      // Busqueda de la ultima locacion de cada personaje
      this.servicio.filtrarLocacion( datos[i].name.split(' ').shift() ).subscribe(( res:any ) => {
        datos[i].location = res[res.length - 1];
      }, (err) => {
        datos[i].location = datos[i].location;
      });
    }

    return datos;
  }

}
