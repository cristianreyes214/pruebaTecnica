import { Pipe, PipeTransform } from '@angular/core';
import { SerieService } from '../Servicio/serie.service';

@Pipe({
  name: 'ultimoEpisodio'
})
export class UltimoEpisodioPipe implements PipeTransform {

  constructor(private servicio:SerieService){}

  transform( datos: any ): string {
    for ( let i = 0; datos.length > i; i++ ){
      const posicion = datos[i].episode.length-1;
      const id = datos[i].episode[posicion].split('episode/').pop();

      this.servicio.filtrarEpisodio( id, datos[i].name ).subscribe(( res: any ) => {
        datos[i].episode = res.name;
      });

      this.servicio.filtrarLocacion( datos[i].name.split(' ').shift() ).subscribe(( res:any ) => {
        datos[i].location = res[res.length - 1];
      }, (err) => {
        datos[i].location = datos[i].location;
      });
    }

    return datos;
  }

}
