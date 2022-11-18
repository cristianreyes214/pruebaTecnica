import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerieService } from '../../Servicio/serie.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  personajes: any = [];

  constructor(private router: Router, private servicio: SerieService) { }

  ngOnInit(): void {
    if ( JSON.parse( localStorage.getItem('favorito') ) !== null ){
      this.personajes = JSON.parse( localStorage.getItem('favorito') );
    }
  }

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

  quitar_favorito( id: string | number ){
    for (let i = 0; this.personajes.length > i; i++){
      if ( this.personajes[i].id == id ){
        this.personajes = this.personajes.filter(favorito => favorito != this.personajes[i]);
        localStorage.setItem('favorito', JSON.stringify(this.personajes));
      }
    }
  }

}
