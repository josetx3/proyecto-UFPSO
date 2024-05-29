import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieCard} from "@app/modules/user/interfaces/home.interface";
import {MovieService} from "@app/modules/user/services/movie.service";
import {Subscription} from "rxjs";
import {LoadingService} from "@app/core/services/loading.service";
import {DomSanitizer} from "@angular/platform-browser";

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
    private sanitizer: DomSanitizer,
  ) {
    _loader.show();
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
          this.trailer = data[0].movie_trailer; // Mostrar el primer tráiler
          console.log(this.trailer)
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
    }, 8000);
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

  public getTrailer2() {
    const url = "https://www.youtube.com/embed/jJ0wXV-P998";
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
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
