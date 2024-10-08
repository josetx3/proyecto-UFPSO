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

  name_movie: string = '';
  date_movie: string = '';

  movieId: string | any = '';
  //CAmbiar el tipado por | MovieInfoId |
  dataMovie: any = [];
  dataHourMovie: any = [];
  schedule_price: number = 0;
  @Input() selectedMovie!: Movie;
  fechas: any = []
  schedule_id_array: string [] = [];

  constructor(
    private _loader: LoadingService,
    private router: ActivatedRoute,
    private _movie: MovieService,
    private _schedule: MovieScheduleService,
    private sanitizer: DomSanitizer,
    private _router: Router
  ) {
    this._loader.show();
  }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.movieId = params.get('movie_id');
      this._movie.setMovieId(this.movieId);
      this._movie.getMovieId(this.movieId).subscribe({
        next: (data) => {
          //Setear el nombre para pasarlo al checkout
          this.name_movie = data.movie_name_spanish;
          this._movie.setMovieName(this.name_movie)
          const reducedSchedule = data.movie_schedule.reduce((acc: any, current: any) => {
            const date = current.movie_presentation_date;
            if (!acc[date]) {
              acc[date] = [];
            }
            acc[date].push(current);
            return acc;
          }, {} as { [key: string]: typeof data.movie_schedule });
          this.fechas = reducedSchedule;
          this.dataMovie = data;
          this._loader.hide();
        }
      })
    });
  }

  getDates(): string[] {
    return Object.keys(this.fechas);
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

  showFunctionHour(date: any): void {
    this.dataHourMovie = []
    date.forEach((item: any) => {
      this.schedule_id_array.push(item.movie_schedule_id)

      this._schedule.getMovieSchedule(item.movie_schedule_id, item.movie_presentation_date).subscribe({
        next: (data) => {
          this.schedule_price = data[0].movie_schedule_price;
          this.dataHourMovie.push(data[0]);
        }
      })
    })

  }

  openCheckout(price: number, index: number): void {
    this.date_movie = this.dataHourMovie[index].movie_schedule_presentation_time;
    this._movie.setMovieDate(this.date_movie);

    this._router.navigate(['/purchase']).then();
    this._schedule.setScheduleId(this.schedule_id_array[index]);
    this._schedule.setSchedulePrice(price)
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

  protected readonly Object = Object;
}
