import { Component, OnInit } from '@angular/core';
import { PeliculasService } from "../../services/peliculas.service";
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  public pelis: any[] = [];
  forma: FormGroup;
  public urlimages:string= "http://image.tmdb.org/t/p/w400";
  public textSearch:string = "";

  constructor(
    private activateRoute: ActivatedRoute,
    private pelisservices: PeliculasService
  ) {
    this.activateRoute.params.subscribe(params => {
      this.textSearch = params["term"];
    });
  }


  ngOnInit() {
    this.forma = new FormGroup({
      'tex': new FormControl(this.textSearch, [Validators.required, Validators.minLength(3)])
    });

    this.activateRoute.params.subscribe(params => {
      this.pelisservices.buscarPelicula(params["term"]).subscribe(resp => {
        this.pelis = resp.results;
      });
    });

  }

  buscar() {
    if(this.forma.valid){
      this.pelisservices.buscarPelicula(this.forma.value.tex).subscribe(resp =>{
        this.pelis = resp.results;
      });
    }
  }

}
