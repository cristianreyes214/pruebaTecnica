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

  constructor(private servicio:SerieService, private router: Router) {
    servicio.obtenerPersonajes().subscribe((res: any) => {
      this.personajes = res.results;
    })
  }

  ngOnInit(): void {
  }

  abrir_locacion(locacion: any){
    if (locacion.id){
      this.router.navigate(['/locacion', locacion.id]);
    }
    else{
      this.servicio.filtrarLocacion(locacion.name).subscribe((res: any) => {
        const id = res[0].id;
        this.router.navigate(['/locacion', id]);
      });
    }
  }

}
