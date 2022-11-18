import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerieService } from '../../Servicio/serie.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  /**
   * @param personajes Array que almacena en objetos la informacion de los personajes favoritos
   */
  personajes: any = [];

  constructor(private router: Router, private servicio: SerieService) { }

  /**
   * obtener personajes favoritos almacenados en el localStorage
   */
  ngOnInit(): void {
    if ( JSON.parse( localStorage.getItem('favorito') ) !== null ){
      this.personajes = JSON.parse( localStorage.getItem('favorito') );
    }
  }

  /**
   * Dirigir a componente en se amplia la informacion sobre la locacion del personaje
   * @param locacion objeto donde se almacena la informacion de la locacion
   * Teniendo en cuenta el proceso de filtrado de la última locacion del personaje y que en algunos casos no se obtiene la informacion esperada se utiliza la condicion:
   * IF = para personajes cuya locacion no fue filtrada con éxito y se toma por defecto la original.
   * ELSE = locaciones filtradas exitosamente.
   */
  abrir_locacion( locacion: any ){
    if ( locacion.id ){
      this.router.navigate(['/locacion', locacion.id]);
    } else {
      this.servicio.filtrarLocacion( locacion.name ).subscribe( (res: any) => {
        const id = res[0].id;
        this.router.navigate(['/locacion', id]);
      });
    }
  }

  /**
   * Eliminar personaje favorito, removiendolo del array que guarda la data de todos los personajes favoritos
   * @param id variable que almacena el id del personaje
   */
  quitar_favorito( id: string | number ){
    for (let i = 0; this.personajes.length > i; i++){
      if ( this.personajes[i].id == id ){
        this.personajes = this.personajes.filter(favorito => favorito != this.personajes[i]);
        localStorage.setItem('favorito', JSON.stringify(this.personajes));
      }
    }
  }

}
