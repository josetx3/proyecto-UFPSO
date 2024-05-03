import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MoviesTableComponent} from "@app/modules/administration/pages/movies/pages/movies-table/movies-table.component";
import {Select} from "@app/core/interfaces/select.interface";
import {SelectService} from "@app/core/services/select.service";
import {AlertService} from "@app/core/services/alert.service";
import {MovieService} from "@app/modules/user/services/movie.service";
import {ImageService} from "@app/core/services/image.service";
import {LoadingService} from "@app/core/services/loading.service";
import {MovieSchedule, RegisterMovie} from "@app/modules/administration/pages/movies/interfaces/movie.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movies-edit',
  templateUrl: './movies-edit.component.html',
  styleUrls: ['./movies-edit.component.scss']
})
export class MoviesEditComponent implements OnInit {

  @ViewChild(MoviesTableComponent) getMovieTable!: MoviesTableComponent;
  @Output() editMovie: EventEmitter<boolean> = new EventEmitter();

  public FormMovie: FormGroup = new FormGroup({});
  public formMovieSchedule: FormGroup = new FormGroup({});

  dataGenderMovie: Select[] = [];
  ArrayGender: string[] = [];
  dataLanguageMovie: Select[] = [];
  ArrayLanguage: string[] = [];
  dataCountryMovie: Select[] = [];

  movie_id: string = '';
  edit: boolean = false;
  fileNameProduct: string[] = [];
  fileImageProduct: string[] = [];

  constructor(
    private router: Router,
    private _alert: AlertService,
    private _movie: MovieService,
    private _image: ImageService,
    private _select: SelectService,
    private _loader: LoadingService,
  ) {
  }

  ngOnInit() {
    this.initFormMovie();
    this.initFormMovieSchedule();
    this.getGenderMovie();
    this.getCountryMovie();
    this.getLanguageMovie();
    this._movie.movideId.subscribe(value => {
      if (value !== null) {
        this.movie_id = value;
        this._movie.getMovieId(value).subscribe({
          next: (data): void => {
            console.log(data);
            this.movie_id = data.movie_id;
            console.log(this.movie_id);
            this.setValueMovie(data);
            this.edit = true;
          }
        })
      }
    })
  }

  initFormMovie(): void {
    this.FormMovie = new FormGroup({
      movie_name_spanish: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      movie_name_english: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      movie_description: new FormControl('', [Validators.required, Validators.minLength(50), Validators.maxLength(255)]),
      movie_trailer: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]),
      movie_actors: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]),
      movie_release_date: new FormControl('', [Validators.required]),
      movie_duration: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(3)]),
      movie_classification: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(3)]),
      movie_availability: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      movie_director: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      origin_country: new FormControl('', [Validators.required]),
      gender_movie: new FormControl('', [Validators.required]),
      language_movie: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required])
    })
  }

  initFormMovieSchedule(): void {
    this.formMovieSchedule = new FormGroup({
      movie_schedule_price: new FormControl('', [Validators.required]),
      movie_schedule_presentation: new FormControl('', [Validators.required]),
      movie_schedule_video_quality: new FormControl('', [Validators.required]),
    })
  }

  setDate(): void {

  }

  //Genero de la pelicula
  getGenderMovie() {
    this._select.getGenderMovie().subscribe({
      next: (data) => {
        this.dataGenderMovie = data;
      }, error: (e): void => {
        this._alert.warning('Tenemos problemas al obtener el genero de las peliculas, reintenta mas tarde')
      }
    })
  }

  changeGender(_event: Select): void {
    const validators = [Validators.required, Validators.maxLength(15)];
    const genderSelected = this.FormMovie?.get('gender_movie')?.value;
    this.ArrayGender.push(genderSelected);
    const lastGender = this.ArrayGender[this.ArrayGender.length - 1];
  }

  //Lenguaje de la pelicula
  getLanguageMovie() {
    this._select.getLanguageMovie().subscribe({
      next: (data) => {
        this.dataLanguageMovie = data;
      }, error: (e): void => {
        this._alert.warning('Tenemos problemas al obtener el lenguaje de las peliculas, reintenta mas tarde')
      }
    })
  }

  changeLanguage(_event: Select): void {
    const validators = [Validators.required, Validators.maxLength(15)];
    const languageSelected = this.FormMovie?.get('language_movie')?.value;
    this.ArrayLanguage.push(languageSelected);
    const lastGender = this.ArrayLanguage[this.ArrayLanguage.length - 1];
  }

  //Pais de la pelicula
  changeCountry(_event: Select): void {
    const validators = [Validators.required, Validators.maxLength(15)];
  }

  getCountryMovie(): void {
    this._select.getCountryMovie().subscribe({
      next: (data: Select[]) => {
        this.dataCountryMovie = data;
      }, error: (e): void => {
        this._alert.warning('Tenemos problemas al obtener la ciudad de la pelicula, reintenta mas tarde');
      }
    })
  }

  setValueMovie(data: RegisterMovie): void {
    this.FormMovie.get('movie_name_spanish')?.setValue(data.movie_name_spanish);
    this.FormMovie.get('movie_name_english')?.setValue(data.movie_name_english);
    this.FormMovie.get('movie_description')?.setValue(data.movie_description);
    this.FormMovie.get('movie_trailer')?.setValue(data.movie_trailer);
    this.FormMovie.get('movie_actors')?.setValue(data.movie_actors);
    this.FormMovie.get('movie_release_date')?.setValue(data.movie_release_date);
    this.FormMovie.get('movie_duration')?.setValue(data.movie_duration);
    this.FormMovie.get('movie_classification')?.setValue(data.movie_classification);
    this.FormMovie.get('movie_availability')?.setValue(data.movie_availability);
    this.FormMovie.get('movie_director')?.setValue(data.movie_director);
    this.FormMovie.get('origin_country')?.setValue(data.origin_country);
    this.FormMovie.get('gender_movie')?.setValue(data.gender_movie);
    this.FormMovie.get('language_movie')?.setValue(data.language_movie);
    this.FormMovie.get('image')?.setValue(data.image);
  }

  returnTableMovie(): void {
    this.router.navigateByUrl('administration/movies').then();
  }

  uploadImages(event: any): void {
    const capturedFile = event.target.files[0];
    const supportedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
    const fileType = capturedFile.type;
    if (supportedTypes.includes(fileType)) {
      const fileName = capturedFile.name;
      this.fileNameProduct.push(fileName);
      this._image.compressImage(capturedFile, 0.10).then(
        compressedResult => {
          this.fileImageProduct.push(compressedResult);
          this._alert.success('Imagen subida correctamente');
        }
      )
    } else {
      this._alert.warning('Solo se admiten archivos PNG, JPEG, JPG o WEBP.');
    }
  };

  //Editar los datos de la pelicula
  sendEditMovie(): void {

  }

  //Agregar la parte de las fechas en la pelicula
  sendDatesMovie(): void {
    if (this.formMovieSchedule.valid) {
      this._loader.show();
      console.log(this.movie_id);
      const dataMovieSchedule: MovieSchedule = {
        movie_id: this.movie_id,
        movie_schedule_price: this.formMovieSchedule.get('movie_schedule_price')?.value,
        movie_schedule_presentation: this.formMovieSchedule.get('movie_schedule_presentation')?.value,
        movie_schedule_video_quality: this.formMovieSchedule.get('movie_schedule_video_quality')?.value,
      }
      console.log(dataMovieSchedule);
      this._movie.setMovieSchedule(dataMovieSchedule).subscribe({
        next: () => {
          this._loader.hide();
          this.edit = false;
          this._alert.success('Fecha para ver la pelicula registradas con exito');
          this.formMovieSchedule.reset();
        }, error: (error) => {
          console.error(error);
          this._alert.error('¡Oops! Parece que hubo un problema al intentar registrar la pelicula.');
          this._loader.hide();
        }
      })
    } else {
      this._loader.hide();
      this._alert.warning('Faltan campos por llenar');
    }
  }

}
