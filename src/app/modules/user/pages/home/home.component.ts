import {Component, OnDestroy, OnInit} from '@angular/core';
import {Food, Movie, MovieCard} from "@app/modules/user/interfaces/home.interface";
import {MovieService} from "@app/modules/user/services/movie.service";
import {Subscription} from "rxjs";
import {LoadingService} from "@app/core/services/loading.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
//data de las peliculas
  movies: MovieCard[] = [];

  trailer: string = '';
  private trailerIndex: number = 0;
  private trailerInterval: any;
  private subscription: Subscription = new Subscription();

  constructor(
    private _movie: MovieService,
    private _loader: LoadingService,
  ) {
  }

  ngOnInit() {
    this.getAllMoviesCard();
    console.log(this.trailer);
  }

  getAllMoviesCard(): void {
    this.subscription = this._movie.getAllMoviesCard().subscribe({
      next: (data) => {
        this.movies = data;
        if (this.movies.length > 0) {
          this.trailerIndex = 0;
          this.trailer = data.movie_image; // Mostrar el primer tráiler
          console.log(this.trailer)
          this.startTrailerRotation();
        }
      }
    });
  }

  startTrailerRotation(): void {
    if (this.trailerInterval) {
      clearInterval(this.trailerInterval); // Limpiar cualquier intervalo existente
    }

    this.trailerInterval = setInterval(() => {
      this.trailerIndex = (this.trailerIndex + 1) % this.movies.length;
      this.trailer = this.movies[this.trailerIndex].movie_image;
    }, 2000);
  }

  ngOnDestroy() {
    if (this.trailerInterval) {
      clearInterval(this.trailerInterval);
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}
