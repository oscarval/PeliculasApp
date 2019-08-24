import { Component, OnInit } from '@angular/core';
import { PeliculasService } from "../../services/peliculas.service";
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  public peli: any = {};
  public peliImage:string;
  public urlimages:string= "http://image.tmdb.org/t/p/w300";
  public previousPath:string = "";
  public searchtext:string = "";

  constructor(
    private router: Router,
    private pelisservices: PeliculasService,
    private activateRoute: ActivatedRoute,
    private _location:Location
  ) {

  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.previousPath = params["path"];
      this.searchtext = params["search"];
      this.pelisservices.getPelicula(params["id"]).subscribe( resp =>{
        this.peliImage = this.urlimages + resp.poster_path;
        this.peli = resp;
        console.log(this.peli);
      });
    });
  }

  regresar(){
    if(this.searchtext){
      this.router.navigate([this.previousPath,this.searchtext]);
    }else{
      this.router.navigate([this.previousPath]);
    }

  }

}
