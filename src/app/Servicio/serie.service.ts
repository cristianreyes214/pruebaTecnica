import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http:HttpClient) { }

  query(item: string){
    return this.http.get(`https://rickandmortyapi.com/api/${item}`);
  }

  obtenerPersonajes(){
    return this.query('character');
  }

  obtenerPersonaje(id: number){
    return this.query(`character/${id}`);
  }

  obtenerLocacion(id: number){
    return this.query(`location/${id}`);
  }

  multiplesEpisodios(numbers:any[]){
    return this.query(`episode/${numbers}`);
  }
}

