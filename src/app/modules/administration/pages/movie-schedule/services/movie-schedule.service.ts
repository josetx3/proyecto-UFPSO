import {Injectable} from '@angular/core';
import {HttpService} from "@app/core/services/http.service";
import {HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {EndPoints} from "@app/core/utils/end-points";
import {MovieSchedule} from "@app/modules/administration/pages/movies/interfaces/movie.interface";

@Injectable({
  providedIn: 'root'
})
export class MovieScheduleService {

  constructor(private _http: HttpService) {
  }


  public getDataSchedule(params: HttpParams): Observable<any> {
    const defaultOptions = this._http.addParams(params);
    return this._http.get<any>(EndPoints.GET_MOVIE_INFO_BASIC, false, defaultOptions)
  }

  public setMovieSchedule(data: MovieSchedule): Observable<any> {
    return this._http.post(EndPoints.MOVIE_SCHEDULE, data);
  }


}
