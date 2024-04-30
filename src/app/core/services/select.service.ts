import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {DocumentType, GenderMovie, LanguageMovie, Select} from '@app/core/interfaces/select.interface';
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


}
