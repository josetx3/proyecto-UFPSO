import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {DocumentType, Select} from '@app/core/interfaces/select.interface';
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


}
