import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dimension } from '@app/core/interfaces/select.interface';

export interface DataFile {
  formControlName: string,
  fileName: string,
  base64: string,
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() {
  }

  public converterToBase64(file: File): Observable<any> {
    return new Observable<string | ArrayBuffer | null>(observer => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        observer.next(fileReader.result);
        observer.complete();
      };
      fileReader.onerror = error => {
        observer.error(error);
        observer.complete();
      }
    });
  }

  public convertBase64ToFile(base64: string, fileName: string, mime: string = 'image/png'): File {
    const base64Split: string[] = base64.split(',');
    const baseSubString = atob(base64Split[1]);
    let base64Length = baseSubString.length;
    let uint8Array = new Uint8Array(base64Length);
    while (base64Length--) {
      uint8Array[base64Length] = baseSubString.charCodeAt(base64Length);
    }
    return new File([uint8Array], fileName, { type: mime });
  }

  public imageValidate(event: any, extensions: String[], dimension: Dimension, size: number): Observable<any> {
    return new Observable<string | ArrayBuffer | null>(observer => {
      const reader = new FileReader();
      if (event.target.files && event.target.files[0]) {
        const [file] = event.target.files;
        if (extensions.some((extension) => extension === file.type) && (file.size < size)) {
          reader.readAsDataURL(file);
          reader.onload = () => {
            const image = new Image();
            image.src = reader.result as string;
            image.onload = (event) => {
              if (image.naturalWidth < dimension.width && image.naturalHeight < dimension.height) {
                observer.next(reader.result);
                observer.complete();
              } else {
                observer.error(`Dimensiones no permitidas, el ancho debe ser menor a ${dimension.width}px y el alto menor a ${dimension.height}px`);
                observer.complete();
              }
            }
          };
          reader.onerror = error => {
            observer.error('Imagen no permitida');
            observer.complete();
          }
        } else {
          observer.error('Imagen no permitida');
          observer.complete();
        }
      }
    });
  }

  compressImage(imageFile: File, reductionPercentage: number): Promise<string> {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement("canvas");
      const image = new Image();

      image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;

        const context = canvas.getContext("2d");
        if (context !== null) {
          context.drawImage(image, 0, 0);

          canvas.toBlob(
            (blob) => {
              if (blob !== null) {
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                  const base64data = reader.result as string;
                  resolve(base64data);
                };
              }
            },
            "image/webp",
            reductionPercentage
          );
        }
      };
      image.src = URL.createObjectURL(imageFile);
    });
  }

}
