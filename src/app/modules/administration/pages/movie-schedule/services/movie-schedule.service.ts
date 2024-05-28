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

  private scheduleId: string = '';
  private priceMovieSchedule: number = 0;

  constructor(private _http: HttpService) {
  }


  setScheduleId(id: string) {
    this.scheduleId = id;
  }

  getScheduleId(): string {
    return this.scheduleId;
  }

  setPriceMovieSchedule(price: number) {
    this.priceMovieSchedule = price;
  }

  getPriceMovieSchedule(): number {
    return this.priceMovieSchedule;
  }

  public getDataSchedule(params: HttpParams): Observable<any> {
    const defaultOptions = this._http.addParams(params);
    return this._http.get<any>(EndPoints.GET_MOVIE_INFO_BASIC, false, defaultOptions)
  }

  public setMovieSchedule(data: MovieSchedule): Observable<any> {
    return this._http.post(EndPoints.MOVIE_SCHEDULE, data);
  }

  getMovieSchedule(id_movie: string, date: any): Observable<any> {
    return this._http.get<any>(EndPoints.GET_MOVIE_SCHEDULE + id_movie + '/' + date);
  }

  getDataTableMovieSchedule(params: HttpParams): Observable<any> {
    const defaultOptions = this._http.addParams(params);
    return this._http.get<any>(EndPoints.GET_MOVIE_SCHEDULE, false, defaultOptions);
  }


}
