import {Injectable} from '@angular/core';
import {HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {EndPoints} from "@app/core/utils/end-points";
import {HttpService} from "@app/core/services/http.service";
import {RegisterMovie} from "@app/modules/administration/pages/movies/interfaces/movie.interface";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieId: string = '';

  constructor(private _http: HttpService) {
  }

  //Parte administrativa
  public _movieId = new BehaviorSubject<string | null>(null);
  movideId = this._movieId.asObservable();

  public setMovieId(movieId: string | null): void {
    this._movieId.next(movieId);
  }

  //Cargarla en la vista de purchase
  setMovieIdPurchase(movieId: any): void {
    this.movieId = movieId
  }

  getMovieIdPurchase(): string {
    return this.movieId;
  }


  public getMovieTable(params: HttpParams): Observable<any> {
    const defaultOptions = this._http.addParams(params);
    return this._http.get<any>(EndPoints.GET_ALL_MOVIES, false, defaultOptions);
  }

  public registerMovie(data: RegisterMovie): Observable<any> {
    return this._http.post(EndPoints.MOVIE, data);
  }

  public getMovieId(movie_id: string): Observable<any> {
    return this._http.get(EndPoints.MOVIE + movie_id);
  }

  public getAllMoviesCard(): Observable<any> {
    return this._http.get<any>(EndPoints.GET_MOVIE_INFO_BASIC, false);
  }

}
