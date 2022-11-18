import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'favoritoAct'
})
export class FavoritoActPipe implements PipeTransform {

  /**
   * Filtrar personajes favoritos; con ello permitir la opcion de agregar/quitar personaje favorito
   * @param id id del personaje
   * @returns TRUE si el personaje ha sido seleccionado como favorito. FALSE si no es un personaje favorito
   */
  transform( id: string | number ): boolean {
    let personajes_favoritos: any;
    let result: boolean;

    if ( JSON.parse( localStorage.getItem('favorito') ) !== null ){
      personajes_favoritos = JSON.parse(localStorage.getItem('favorito'));
      const buscarId = personajes_favoritos.find( personaje => personaje.id == id );
      if ( buscarId != undefined ){
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
