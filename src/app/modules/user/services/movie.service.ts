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


  constructor(private _http: HttpService) {
  }

  //Parte administrativa        | ID DE LA PELICULA
  public _movieId = new BehaviorSubject<string | null>(null);
  movieId = this._movieId.asObservable();

  public setMovieId(movieId: string | null): void {
    this._movieId.next(movieId);
  }

  public _movie_name = new BehaviorSubject<string | null>(null);
  movieName = this._movie_name.asObservable();

  public setMovieName(movie_name: string | null): void {
    this._movie_name.next(movie_name);
  }

  public _movie_date = new BehaviorSubject<string | null>(null);
  movieDate = this._movie_date.asObservable();

  public setMovieDate(movie_date: string | null): void {
    this._movie_date.next(movie_date);
  }


  public getMovieTable(params: HttpParams): Observable<any> {
    const defaultOptions = this._http.addParams(params);
    return this._http.get<any>(EndPoints.GET_ALL_MOVIES, false, defaultOptions);
  }

  public registerMovie(data: RegisterMovie): Observable<any> {
    return this._http.post(EndPoints.MOVIE, data);
  }

  public getMovieId(movie_id: string): Observable<any> {
    return this._http.get(EndPoints.MOVIE + movie_id, false);
  }

  public getAllMoviesCard(): Observable<any> {
    return this._http.get<any>(EndPoints.GET_MOVIE_INFO_BASIC, false);
  }

  public putMovieData(id_movie: string, data_movie: any): Observable<any> {
    return this._http.put<any, any>(EndPoints.MOVIE + id_movie, data_movie);
  }

  public editStatusHomeMovie(id_movie: string, data_home: boolean): Observable<any> {
    return this._http.put<any, any>(EndPoints.UPDATE_HOME_MOVIE + id_movie, data_home)
  }

}
