import {Injectable} from '@angular/core';
import {HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {EndPoints} from "@app/core/utils/end-points";
import {HttpService} from "@app/core/services/http.service";
import {RegisterMovie} from "@app/modules/administration/pages/movies/interfaces/movie.interface";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _http: HttpService) {
  }

  public getMovieTable(params: HttpParams): Observable<any> {
    const defaultOptions = this._http.addParams(params);
    return this._http.get<any>(EndPoints.GET_ALL_MOVIES, false, defaultOptions);
  }

  public registerMovie(data: RegisterMovie): Observable<any> {
    return this._http.post(EndPoints.REGISTER_MOVIE, data);
  }

}
