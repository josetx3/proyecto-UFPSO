import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CountryMovie, DocumentType, GenderMovie, LanguageMovie, Select} from '@app/core/interfaces/select.interface';
import {EndPoints} from '@app/core/utils/end-points';
import {HttpService} from '@app/core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor(
    private _http: HttpService
  ) {
  }


  public getDocumentTypes(): Observable<Select[]> {
    return new Observable<Select[]>((observer) => {
      this._http.get<DocumentType[]>(EndPoints.DOCUMENT_TYPE).subscribe({
        next: (data) => {
          const document_types: Select[] = data.map((obj) => {
            return {
              label: obj.code,
              value: obj.document_type_id
            };
          });
          observer.next(document_types);
          observer.complete();
        }
      })
    });
  }

  public getGenderMovie(): Observable<Select[]> {
    return new Observable<Select[]>((observable) => {
      this._http.get<GenderMovie[]>(EndPoints.GET_GENDER_MOVIE).subscribe({
        next: (data) => {
          const gender_movie: Select[] = data.map((obj) => {
            return {
              label: obj.gender_name,
              value: obj.gender_id,
            }
          });
          observable.next(gender_movie);
          observable.complete();
        }
      })
    });
  }

  public getLanguageMovie(): Observable<Select[]> {
    return new Observable<Select[]>((observable) => {
      this._http.get<LanguageMovie[]>(EndPoints.GET_LANGUAGE_MOVIE).subscribe({
        next: (data) => {
          const language_movie: Select[] = data.map((select) => {
            return {
              label: select.language_name,
              value: select.language_id,
            }
          });
          observable.next(language_movie);
          observable.complete();
        }
      })
    });
  }

  public getCountryMovie(): Observable<Select[]> {
    return new Observable<Select[]>((observable) => {
      this._http.get<CountryMovie[]>(EndPoints.GET_COUNTRY_MOVIE).subscribe({
        next: (data) => {
          const country_movie: Select[] = data.map((select) => {
            return {
              label: select.countryName,
              value: select.country_id,
            }
          });
          observable.next(country_movie);
          observable.complete();
        }
      })
    });
  }

  public getFood(): Observable<Select[]> {
    return new Observable<Select[]>((observable) => {
      this._http.get<any[]>(EndPoints.GET_FOOD).subscribe({
        next: (data) => {
          const food: Select[] = data.map((select) => {
            return {
              label: select.food_name,
              value: select.food_id,
            }
          });
          observable.next(food);
          observable.complete();
        }
      })
    });
  }

  public getTypeFood(): Observable<Select[]> {
    return new Observable<Select[]>((observable) => {
      this._http.get<any[]>(EndPoints.GET_TYPE_FOOD).subscribe({
        next: (data) => {
          const type_food: Select[] = data.map((select) => {
            return {
              label: select.type_food_name,
              value: select.type_food_id,
            }
          });
          observable.next(type_food);
          observable.complete();
        }
      })
    });
  }

  public getVariantFood(type_food_id: string): Observable<Select[]> {
    return new Observable<Select[]>((observable) => {
      this._http.get<any[]>(EndPoints.GET_VARIANT_FOOD + type_food_id).subscribe({
        next: (data) => {
          const type_food: Select[] = data.map((select) => {
            return {
              label: select.variant_type_food_name,
              value: select.variant_type_food_id,
            }
          });
          observable.next(type_food);
          observable.complete();
        }
      })
    });
  }

  //OBTENER LAS PELICULAS QUE TENGAN EL CAMPO DE STATUS_HOME = TRUE
  public getScheduleMovieHome(): Observable<Select[]> {
    return new Observable<Select[]>((observable) => {
      this._http.get<any[]>(EndPoints.GET_MOVIE_INFO_BASIC).subscribe({
        next: (data) => {
          const movies_home: Select[] = data.map((select) => {
            return {
              label: select.movie_name_spanish,
              value: select.movie_id,
            }
          });
          observable.next(movies_home);
          observable.complete();
        }
      })
    });
  }

}
