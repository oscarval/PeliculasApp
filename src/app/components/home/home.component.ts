import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  @Input('peliculas') peliculas;
  @Input('titulo') titulo;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  verPeli(id:string){
    this.router.navigate( ['pelicula', id, 'peliculas'] );
  }

}
