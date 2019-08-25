import { Component, OnInit } from '@angular/core';
import { PeliculasService } from "../../services/peliculas.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styles: []
})
export class PeliculasComponent implements OnInit {

  public pelisCartelera: any = [];
  public pelisPopulares: any[] = [];
  public pelisInfantiles: any[] = [];

  constructor(
    public pelisservices:PeliculasService,
    private route:Router
    ) {
    this.pelisservices.getCartelera().subscribe( resp =>{
      console.log(resp);
      if(resp.results.length > 0){
        for ( let i=0; i < 6; i++ ){
          let peli = resp.results[i];
          this.pelisCartelera.push(peli);
        }
      }
    });
    this.pelisservices.getPopulares().subscribe( resp =>{
      if(resp.results.length > 0){
        for ( let i=0; i < 6; i++ ){
          let peli = resp.results[i];
          this.pelisPopulares.push(peli);
        }
      }

    });
    this.pelisservices.getInfantiles().subscribe( resp =>{
      if(resp.results.length > 0){
        for ( let i=0; i < 6; i++ ){
          let peli = resp.results[i];
          this.pelisInfantiles.push(peli);
        }
      }

    });
  }

  ngOnInit() {

  }


}
