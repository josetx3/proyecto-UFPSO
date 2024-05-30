import {Component, OnInit} from '@angular/core';
import {TableActions, TableColumn} from "@app/core/interfaces/table.interface";
import {AlertService} from "@app/core/services/alert.service";
import {DatePipe} from "@angular/common";
import {HttpParams} from "@angular/common/http";
import {LoadingService} from "@app/core/services/loading.service";
import {MovieService} from "@app/modules/user/services/movie.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DataMovieTable, RegisterMovie} from "@app/modules/administration/pages/movies/interfaces/movie.interface";
import {Select} from "@app/core/interfaces/select.interface";
import {SelectService} from "@app/core/services/select.service";
import {ImageService} from "@app/core/services/image.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.scss'],
  providers: [DatePipe]
})
export class MoviesTableComponent implements OnInit {

  public formMovie: FormGroup = new FormGroup<any>({});

  //Select para obtener informacion para registrar peliculas
  dataGenderMovie: Select[] = [];
  ArrayGender: string[] = [];
  dataLanguageMovie: Select[] = [];
  ArrayLanguage: string[] = [];
  dataCountryMovie: Select[] = [];

  movies: any[] = [];
  fileImageProduct: string = '';
  fileNameProduct: string = '';
  showRegisterMovie: boolean = false;
  showEditMovie: boolean = false;

  menuEditMovie: boolean = false;
  title: string = 'Nueva pelicula';
  image: string = './assets/img/profile-user.png';

  columnsTable: TableColumn[] = [
    {name: 'Nombre', isFilterable: true, key: 'movie_name_spanish', type: 'text'},
    {name: 'Clasificacion', isFilterable: true, key: 'movie_classification', type: 'text'},
    {name: 'Duracion', isFilterable: true, key: 'movie_duration', type: 'text'},
    {name: 'Estado', isFilterable: true, key: 'movie_status', type: 'status'},
    {name: 'Disponibilidad', isFilterable: true, key: 'movie_availability', type: 'availability'},
  ];

  tableActions: TableActions = {
    add: true,
    search: false,
    unlock: false,
    edit: {
      can: true
    },
    delete: {
      can: false
    },
    view: {
      can: true
    }
  }

  size: number = 0;
  pageIndex: number = 0;
  totalElements: number = 0;
  isPageable: boolean = false;
  dataTable: DataMovieTable[] = [];

  constructor(
    private _alert: AlertService,
    private router: Router,
    private _movie: MovieService,
    private _image: ImageService,
    private _select: SelectService,
    private _loader: LoadingService,
  ) {
  }

  ngOnInit(): void {
    this.getMovieTable(new HttpParams());
  }

//Obtener las peliculas para la tabla
  getMovieTable(params: HttpParams): void {
    this._loader.show();
    this._movie.getMovieTable(params).subscribe({
      next: (data) => {
        console.log(data);
        this.dataTable = data.content;
        this._loader.hide();
      }, error: (e): void => {
        this._loader.hide();
        this._alert.warning('Tenemos problemas, reintenta mas tarde.')
      }
    })
  }

  showCreateMovie(): void {
    this.showRegisterMovie = !this.showRegisterMovie;
    this.formMovie.reset();
    this.fileNameProduct = '';
    this.fileImageProduct = '';
    //Carga la data para los select al registrar una pelicula
    this.initFormMovie();
    this.getGenderMovie();
    this.getLanguageMovie();
    this.getCountryMovie();
    this.formMovie.reset();
  }

  edit(data: any): void {
    this._movie.setMovieId(data.movie_id);
    // this.showEditMovie = true;
    this.router.navigateByUrl('administration/movies/' + data.movie_id).then();
  }

  editMovie(valor: boolean): void {
    this.menuEditMovie = valor;
    this.getMovieTable(new HttpParams());
  }

  statusHome(data: any): void {
    console.log(data.movie_id)
    this._movie.editStatusHomeMovie(data.movie_id, true).subscribe({
      next: () => {
        this._alert.success('El estado de la pelicula ' + data.movie_name_spanish + ' cambio con exito')
      }
    })
  }

  initFormMovie(): void {
    this.formMovie = new FormGroup({
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

  uploadImage(event: any): void {
    const capturedFile = event.target.files[0];
    const supportedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
    const fileType = capturedFile.type;

    if (supportedTypes.includes(fileType)) {
      const fileName = capturedFile.name;
      this._image.compressImage(capturedFile, 0.10).then(compressedResult => {
        this.fileImageProduct = compressedResult;
        this.fileNameProduct = fileName;
        this._alert.success('Imagen subida correctamente');
      });
    } else {
      this._alert.warning('Solo se admiten archivos PNG, JPEG, JPG o WEBP.');
    }
  }

  /**
   * Genero de la pelicula
   */
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
    const genderSelected = this.formMovie?.get('gender_movie')?.value;
    this.ArrayGender.push(genderSelected);
    const lastGender = this.ArrayGender[this.ArrayGender.length - 1];
  }

  /**
   * Lenguaje de la pelicula
   */
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
    const languageSelected = this.formMovie?.get('language_movie')?.value;
    this.ArrayLanguage.push(languageSelected);
    const lastGender = this.ArrayLanguage[this.ArrayLanguage.length - 1];
  }

  /**
   * Pais de la pelicula
   */
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

  sendRegisterMovie(): void {
    if (!this.formMovie.valid) {
      this._loader.show();
      const movieReleaseDate: Date = this.formMovie.get('movie_release_date')?.value;
      let formattedDate: string = '';
      if (movieReleaseDate) {
        // Obtener la fecha en formato ISO (YYYY-MM-DDTHH:MM:SSZ)
        const isoDateString: string = movieReleaseDate.toISOString();
        // Obtener solo la parte de la fecha (YYYY-MM-DD)
        const isoDate: string = isoDateString.split('T')[0];
        // Dividir la fecha en partes (año, mes, día)
        const [year, month, day] = isoDate.split('-');
        // Formatear la fecha como deseas (por ejemplo, "YYYY-MM-DD")
        formattedDate = `${year}-${month}-${day}`;
      }
      const dataMovieRegister: RegisterMovie = {
        movie_name_spanish: this.formMovie.get('movie_name_spanish')?.value,
        movie_name_english: this.formMovie.get('movie_name_english')?.value,
        movie_description: this.formMovie.get('movie_description')?.value,
        movie_trailer: this.formMovie.get('movie_trailer')?.value,
        movie_actors: this.formMovie.get('movie_actors')?.value,
        movie_release_date: formattedDate,
        movie_duration: this.formMovie.get('movie_duration')?.value,
        movie_classification: this.formMovie.get('movie_classification')?.value,
        movie_availability: this.formMovie.get('movie_availability')?.value,
        movie_director: this.formMovie.get('movie_director')?.value,
        origin_country: this.formMovie.get('origin_country')?.value,
        gender_movie: this.formMovie.get('gender_movie')?.value,
        language_movie: this.formMovie.get('language_movie')?.value,
        image: this.fileImageProduct,
      };
      this._movie.registerMovie(dataMovieRegister).subscribe({
        next: () => {
          this._loader.hide();
          this.showRegisterMovie = !this.showRegisterMovie;
          this._alert.success('Pelicula registrada con exito');
          this.formMovie.reset();
          this.fileImageProduct = '';
          this.fileNameProduct = '';
          this.getMovieTable(new HttpParams());
        },
        error: (error) => {
          console.error(error.error.message);
          this._alert.error('¡Oops! Parece que hubo un problema al intentar registrar la pelicula.');
          this._loader.hide();
        }
      });
    } else {
      this._loader.hide();
      this._alert.warning('Faltan campos por llenar');
    }
  }

}
