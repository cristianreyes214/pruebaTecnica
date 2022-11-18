import { Component, OnInit } from '@angular/core';
import { SerieService } from '../../Servicio/serie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  personajes: any [] = [];
  favoritos: any = [];

  constructor( private servicio:SerieService, private router: Router ) {
    servicio.obtenerPersonajes().subscribe((res: any) => {
      this.personajes = res.results;
      this.obtener_favoritos();
    })
  }

  ngOnInit(): void {
  }

  obtener_favoritos(){
    if (JSON.parse(localStorage.getItem('favorito')) !== null){
      this.favoritos = JSON.parse(localStorage.getItem('favorito'));
    }
  }

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

  guardar_favorito( personaje: any ){
    this.favoritos.push(personaje);
    localStorage.setItem('favorito', JSON.stringify(this.favoritos));
    window.location.reload();
  }

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
