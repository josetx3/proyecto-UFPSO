import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieCard} from "@app/modules/user/interfaces/home.interface";
import {MovieService} from "@app/modules/user/services/movie.service";
import {Subscription} from "rxjs";
import {LoadingService} from "@app/core/services/loading.service";
import {DomSanitizer} from "@angular/platform-browser";
import {PurchaseService} from "@app/modules/user/services/purchase.service";
import {Chairs} from "@app/modules/user/interfaces/purchase.interface";

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

  movie_id!: string;
  movie_schedule_id: string = '';

  movie_name?: string;
  movie_date_schedule?: string;
  status_chair: boolean = false;

  //INFORMACION DE LAS SILLAS
  public chairs: Chairs[] = [];
  chairsA: Chairs[] = [];
  chairsB: Chairs[] = [];
  chairsC: Chairs[] = [];
  chairsD: Chairs[] = [];
  chairsE: Chairs[] = [];
  chairsF: Chairs[] = [];
  chairsG: Chairs[] = [];

  constructor(
    private _movie: MovieService,
    private _loader: LoadingService,
    private sanitizer: DomSanitizer,
    private _purchase: PurchaseService,
  ) {
    _loader.show();
  }

  ngOnInit() {
    this.getAllMoviesCard();
  }

  getAllMoviesCard(): void {
    this.subscription = this._movie.getAllMoviesCard().subscribe({
      next: (data) => {
        this.movies = data;
        if (this.movies.length > 0) {
          this.trailerIndex = 0;
          this.trailer = data[0].movie_trailer;
          this.startTrailerRotation();
          this._loader.hide();
        }
      }
    });
  }

  startTrailerRotation(): void {
    if (this.trailerInterval) {
      clearInterval(this.trailerInterval);
    }
    this.trailerInterval = setInterval(() => {
      this.trailerIndex = (this.trailerIndex + 1) % this.movies.length;
      this.trailer = this.movies[this.trailerIndex].movie_trailer;
      this.movie_id = this.movies[this.trailerIndex].movie_id;
      //Esta funcion obtiene el movie_schedule_id para hacer la consulta de que me traiga las sillas
      if (this.movie_id) {
        this.getMovieIdToMovieSchedule();
      }
    }, 10000);
  }

  getMovieIdToMovieSchedule() {
    this._movie.getMovieId(this.movie_id).subscribe({
      next: (data) => {
        if (data.movie_schedule && data.movie_schedule.length > 0) {
          this.status_chair = true;
          this.movie_name = data.movie_name_spanish
          this.movie_schedule_id = data.movie_schedule[0].movie_schedule_id;
          this.movie_date_schedule = data.movie_schedule[0].movie_presentation_date;
          if (this.movie_schedule_id) {
            this.getDataInfoChair();
          }
        } else {
          this.status_chair = false;
        }
      },
      error: (err) => {
        console.error("Esta pelicula no tiene fecha para visualizar", err);
      }
    });
  }

  getDataInfoChair() {
    if (this.movie_schedule_id != null) {
      this._purchase.getDAtaChairIdSchedule(this.movie_schedule_id).subscribe({
        next: (data_chair) => {
          this.chairs = data_chair;
          this.chairsA = this.sortByColumn(this.chairs.filter(chair => chair.row.charAt(0) === 'A'));
          this.chairsB = this.sortByColumn(this.chairs.filter(chair => chair.row.charAt(0) === 'B'));
          this.chairsC = this.sortByColumn(this.chairs.filter(chair => chair.row.charAt(0) === 'C'));
          this.chairsD = this.sortByColumn(this.chairs.filter(chair => chair.row.charAt(0) === 'D'));
          this.chairsE = this.sortByColumn(this.chairs.filter(chair => chair.row.charAt(0) === 'E'));
          this.chairsF = this.sortByColumn(this.chairs.filter(chair => chair.row.charAt(0) === 'F'));
          this.chairsG = this.sortByColumn(this.chairs.filter(chair => chair.row.charAt(0) === 'G'));
        }
      })
    }
  }

  //ORDENAR LAS SILLAS
  sortByColumn(chairs: Chairs[]): Chairs[] {
    return chairs.sort((a, b) => +a.column - +b.column);
  }

  getTrailer() {
    if (this.trailer) {
      const videoUrl = this.trailer.split('v=')[1];
      if (videoUrl) {
        const url = `https://www.youtube.com/embed/${videoUrl}`;
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl('');
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
