import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http:HttpClient) { }

  /**
   * Query con API REST
   * @param item especificacion de consulta a realizar
   * @returns query a consumir
   */
  query(item: string){
    return this.http.get(`https://rickandmortyapi.com/api/${item}`);
  }

  /**
   * Get de lista completa de los personajes
   * @returns data de personajes de la serie
   * Se mapea la respuesta.
   */
  obtenerPersonajes(){
    return this.query('character')
    .pipe(map(data => data['results']));
  }

  /**
   * Consulta de un personaje en especifico
   * @param id id del personaje
   * @returns data del personaje encontrado
   */
  obtenerPersonaje(id: number){
    return this.query(`character/${id}`);
  }

  /**
   * obtener una locacion especifica
   * @param id id de la locacion
   * @returns data de la locacion encontrada
   */
  obtenerLocacion(id: number){
    return this.query(`location/${id}`);
  }

  /**
   * Consulta de varios capitulos de un personaje
   * @param numbers array de id de cada episodio
   * @returns array de cada episodio y su informacion general
   */
  multiplesEpisodios(numbers:any[]){
    return this.query(`episode/${numbers}`);
  }

  /**
   * Buscar un episodio filtrando la solicitud
   * @param id id del episodio
   * @param name nombre del personaje
   * @returns Episodio solicitado
   */
  filtrarEpisodio( id: string | number, name: string ) {
    return this.query(`episode/${id}/?name=${name}`);
  }

  /**
   * Buscar locacion filtrando la solicitud
   * @param name nombre de la locacion
   * @returns locacion solicitada
   */
  filtrarLocacion( name: string ) {
    return this.query(`location/?name=${name}`)
    .pipe(map(data => data['results']));
  }
}

