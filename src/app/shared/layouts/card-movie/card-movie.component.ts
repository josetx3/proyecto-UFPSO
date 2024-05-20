import {Component, OnInit} from '@angular/core';
import {Movie, MovieCard} from "@app/modules/user/interfaces/home.interface";
import {MatDialog} from "@angular/material/dialog";
import {ModalMovieInfoComponent} from "@app/shared/layouts/modal-movie-info/modal-movie-info.component";
import {MovieService} from "@app/modules/user/services/movie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent implements OnInit {
  movies: MovieCard[] = [];

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private _movie: MovieService
  ) {
  }


  ngOnInit() {
    this.getAllMoviesCard();
  }

  getAllMoviesCard(): void {
    this._movie.getAllMoviesCard().subscribe({
      next: (data) => {
        this.movies = data;
      }
    })
  }


  countStartMovie(rating: number): string[] {
    const starClasses = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        starClasses.push('icon-star-full');
      } else {
        starClasses.push('icon-star');
      }
    }
    return starClasses;
  }

}
