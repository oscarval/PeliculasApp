import { Component, OnInit } from '@angular/core';
import { PeliculasService } from "../../services/peliculas.service";

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styles: []
})
export class PeliculasComponent implements OnInit {

  public urlimages400:string;
  public urlimages200:string;
  public pelisCartelera: any[] = [];
  public pelisPopulares: any[] = [];
  public pelisInfantiles: any[] = [];
  public loading:boolean;

  constructor(public pelisservices:PeliculasService) {
    this.loading = true;
    this.urlimages400 = "http://image.tmdb.org/t/p/w400";
    this.urlimages200 = "http://image.tmdb.org/t/p/w200";
    this.pelisservices.getCartelera().subscribe( resp =>{
      console.log(resp);
      if(resp.results.length > 0){
        for ( let i=0; i < 6; i++ ){
          let peli = resp.results[i];
          this.pelisCartelera.push(peli);
        }
      }
      // this.loading = false;
    });
    this.pelisservices.getPopulares().subscribe( resp =>{
      if(resp.results.length > 0){
        for ( let i=0; i < 6; i++ ){
          let peli = resp.results[i];
          this.pelisPopulares.push(peli);
        }
      }
      // this.loading = false;
    });
    this.pelisservices.getInfantiles().subscribe( resp =>{
      if(resp.results.length > 0){
        for ( let i=0; i < 6; i++ ){
          let peli = resp.results[i];
          this.pelisInfantiles.push(peli);
        }
      }
      this.loading = false;
    });
  }

  ngOnInit() {

  }

}
