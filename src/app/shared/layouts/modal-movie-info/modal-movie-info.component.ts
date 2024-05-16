import {Component, Input, OnInit} from '@angular/core';
import {Movie, MovieInfoId} from "@app/modules/user/interfaces/home.interface";
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "@app/modules/user/services/movie.service";
import {LoadingService} from "@app/core/services/loading.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {MovieScheduleService} from "@app/modules/administration/pages/movie-schedule/services/movie-schedule.service";

@Component({
  selector: 'app-modal-movie-info',
  templateUrl: './modal-movie-info.component.html',
  styleUrls: ['./modal-movie-info.component.scss']
})
export class ModalMovieInfoComponent implements OnInit {

  movieId: string | any = '';
  //CAmbiar el tipado por | MovieInfoId |
  dataMovie: any = [];
  @Input() selectedMovie!: Movie;

  constructor(
    private _loader: LoadingService,
    private router: ActivatedRoute,
    private _movie: MovieService,
    private _schedule: MovieScheduleService,
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit() {
    this._loader.show();
    this.router.paramMap.subscribe(params => {
      this.movieId = params.get('movie_id');
      // setTimeout(() => {
      this._movie.getMovieId(this.movieId).subscribe({
        next: (data) => {
          this.dataMovie = data;
          console.log(this.dataMovie);
          this._loader.hide();
        }
      })
      // }, 500)
    });
  }

  //AGREGAR EMBED EN LA RUTA PARA QUE FUNCIONE EL IFRAME
  // getTrailerUrl(): SafeResourceUrl {
  //   console.log(this.dataMovie.movie_trailer)
  //     const videoUrl = this.dataMovie.movie_trailer.split('v=')[1];
  //     const url = `https://www.youtube.com/embed/${videoUrl}`;
  //     return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  // }
  getTrailerUrl(): SafeResourceUrl {
    if (this.dataMovie && this.dataMovie.movie_trailer) {
      const videoUrl = this.dataMovie.movie_trailer.split('v=')[1];
      if (videoUrl) {
        const url = `https://www.youtube.com/embed/${videoUrl}`;
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl('');
  }


  showFunctionHour(date: any): void {
    console.log(this.movieId)
    console.log(date);
    this._schedule.getMovieSchedule(this.movieId, date).subscribe({
      next: (data) => {
        console.log(data);
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
