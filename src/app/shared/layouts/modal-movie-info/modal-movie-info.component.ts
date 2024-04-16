import {Component, Inject, Input, OnInit} from '@angular/core';
import {Movie} from "@app/modules/user/interfaces/home.interface";
import {MovieService} from "@app/modules/user/services/movie.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-movie-info',
  templateUrl: './modal-movie-info.component.html',
  styleUrls: ['./modal-movie-info.component.scss']
})
export class ModalMovieInfoComponent implements OnInit {

  @Input() selectedMovie!: Movie;


  ngOnInit() {
  }


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Movie
  ) {
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
