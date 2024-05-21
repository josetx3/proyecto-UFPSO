import {Component, Input, OnInit} from '@angular/core';
import {Movie, MovieInfoId} from "@app/modules/user/interfaces/home.interface";
import {ActivatedRoute, Router} from "@angular/router";
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
  dataHourMovie: any = [];
  schedule_id: string = '';
  schedule_price: number = 0;
  @Input() selectedMovie!: Movie;

  constructor(
    private _loader: LoadingService,
    private router: ActivatedRoute,
    private _movie: MovieService,
    private _schedule: MovieScheduleService,
    private sanitizer: DomSanitizer,
    private _router: Router
  ) {
  }

  ngOnInit() {
    this._loader.show();
    this.router.paramMap.subscribe(params => {
      this.movieId = params.get('movie_id');
      this._movie.getMovieId(this.movieId).subscribe({
        next: (data) => {
          this.dataMovie = data;
          this._loader.hide();
        }
      })
    });
  }

  //AGREGAR EMBED EN LA RUTA PARA QUE FUNCIONE EL IFRAME
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


  showFunctionHour(schedule_id: string, date: any): void {
    this.schedule_id = schedule_id;
    this._schedule.getMovieSchedule(schedule_id, date).subscribe({
      next: (data) => {
        this.schedule_price = data[0].movie_schedule_price;
        this.dataHourMovie = data;
        this._schedule.setScheduleId(this.schedule_id);
        this._schedule.setPriceMovieSchedule(this.schedule_price)
      }
    })
  }

  openCheckout(): void {
    this._router.navigate(['/purchase']);
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
