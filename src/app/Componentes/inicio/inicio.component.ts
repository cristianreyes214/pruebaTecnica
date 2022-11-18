import { Component, OnInit } from '@angular/core';
import { SerieService } from '../../Servicio/serie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  /**
   *@param personajes Array que guarda la data de todos los personajes
   *@param favoritos Array que guarda objetos cuya informacion es de cada personaje favorito
   *@param data_cargada True cuando la data de personajes haya sido cargada. False cuando los datos se estan cargando
  */
  personajes: any [] = [];
  favoritos: any = [];
  data_cargada = false;

  constructor( private servicio:SerieService, private router: Router ) {
    servicio.obtenerPersonajes().subscribe((res: any) => {
      this.personajes = res;
      this.obtener_favoritos();
    })
  }

  ngOnInit(): void {
  }

  /**
   * Buscar en el localStorage datos sobre personajes favoritos y almacenarlo en:
   * favoritos
   */
  obtener_favoritos(){
    if (JSON.parse(localStorage.getItem('favorito')) !== null){
      this.favoritos = JSON.parse(localStorage.getItem('favorito'));
    }
    // Variable booleana para mostrar contenido
    this.data_cargada = true;
  }

  /**
   * Dirigir a componente en se amplia la informacion sobre la locacion del personaje
   * @param locacion objeto donde se almacena la informacion de la locacion
   * Teniendo en cuenta el proceso de filtrado de la última locacion del personaje y que en algunos casos no se obtiene la informacion esperada se utiliza la condicion:
   * IF = para personajes cuya locacion no fue filtrada con éxito y se toma por defecto la original.
   * ELSE = locaciones filtradas exitosamente.
   */
  abrir_locacion( locacion: any ){
    if ( locacion.id ) {
      this.router.navigate(['/locacion', locacion.id]);
    } else {
      this.servicio.filtrarLocacion( locacion.name ).subscribe((res: any) => {
        const id = res[0].id;
        this.router.navigate(['/locacion', id]);
      });
    }
  }

  /**
   * Almacenar en el localStorage un personaje "favorito"
   * @param personaje objeto que trae la informacion del personaje seleccionado en la vista
   */
  guardar_favorito( personaje: any ){
    this.favoritos.push(personaje);
    localStorage.setItem('favorito', JSON.stringify(this.favoritos));
    window.location.reload();
  }

  /**
   * Eliminar personaje favorito, removiendolo del array que guarda la data de todos los personajes favoritos
   * @param id variable que almacena el id del personaje
   */
  quitar_favorito( id: string | number ){
    for ( let i = 0; this.favoritos.length > i; i++ ){
      if ( this.favoritos[i].id == id ){
        this.favoritos = this.favoritos.filter(favorito => favorito != this.favoritos[i]);
        localStorage.setItem('favorito', JSON.stringify(this.favoritos));
        window.location.reload();
      }
    }
  }

}
