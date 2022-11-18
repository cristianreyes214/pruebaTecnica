import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'favoritoAct'
})
export class FavoritoActPipe implements PipeTransform {

  transform( id: string | number ): boolean {
    let personajes_favoritos: any;
    let result: boolean;

    if (JSON.parse(localStorage.getItem('favorito')) !== null){
      personajes_favoritos = JSON.parse(localStorage.getItem('favorito'));
      const buscarId = personajes_favoritos.find(personaje => personaje.id == id);
      if (buscarId != undefined){
        result = true;
      } else {
        result = false;
      }
    } else {
      result = false;
    }
    return result;
  }

}
