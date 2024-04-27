import {Component, OnInit} from '@angular/core';
import {TableActions, TableColumn} from "@app/core/interfaces/table.interface";
import {AlertService} from "@app/core/services/alert.service";
import {DatePipe} from "@angular/common";
import {HttpParams} from "@angular/common/http";
import {LoadingService} from "@app/core/services/loading.service";
import {MovieService} from "@app/modules/user/services/movie.service";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegisterMovie} from "@app/modules/administration/pages/movies/interfaces/movie.interface";
import {Select} from "@app/core/interfaces/select.interface";

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.scss'],
  providers: [DatePipe]
})
export class MoviesTableComponent implements OnInit {

  public formMovie: FormGroup = new FormGroup<any>({});
  dateRelease: Date = new Date();
  public genderMovie: any;
  public languageMovie: any;

  dataGenderMovie: any = [];
  dataLanguageMovie: any = [];


  movies: any[] = [
    {
      movie_id: '1',
      movie_name: 'Shazam',
      movie_animation: '3D',
      movie_status: 'Activo',
      movie_duration: '2h 10m'
    },
    {
      movie_id: '2',
      movie_name: 'Kunfu panda',
      movie_animation: '3D',
      movie_status: 'Activo',
      movie_duration: '1h 33m'
    },
    {
      movie_id: '3',
      movie_name: 'Scream VI',
      movie_animation: '2D',
      movie_status: 'Inactivo',
      movie_duration: '2h 34m'
    },

  ]

  showRegisterMovie: boolean = false;

  menuEditMovie: boolean = false;
  title: string = 'Nueva pelicula';
  image: string = './assets/img/profile-user.png';

  columnsTable: TableColumn[] = [
    {name: 'Pelicula', isFilterable: true, key: 'movie_name', type: 'text'},
    {name: 'Animacion', isFilterable: true, key: 'movie_animation', type: 'text'},
    {name: 'Duracion', isFilterable: true, key: 'movie_duration', type: 'text'},
    {name: 'Estado', isFilterable: true, key: 'movie_status', type: 'statusName'},
  ];

  tableActions: TableActions = {
    add: true,
    search: false,
    unlock: true,
    edit: {
      can: true
    },
    delete: {
      can: false
    },
    view: {
      can: false
    }
  }

  size: number = 0;
  pageIndex: number = 0;
  totalElements: number = 0;
  hasRoles: boolean = false;
  isPageable: boolean = false;
  // dataTable: UserAuth[] = [];
  dataTable: any[] = [];

  constructor(
    private dialog: MatDialog,
    private _alert: AlertService,
    private _movie: MovieService,
    private _loader: LoadingService,
  ) {
  }

  ngOnInit(): void {
    // this.getMovieTable(new HttpParams());
    this.initFormMovie();
    this.getGenderMovie();
    this.getLanguageMovie();

  }

  showCreateMovie(): void {
    this.showRegisterMovie = !this.showRegisterMovie;
  }

  edit(data: any): void {

  }

  unlockMovie(user: any): void {
  }

  getMovieTable(params: HttpParams): void {
    this._loader.show();
    this._movie.getMovieTable(params).subscribe({
      next: (data) => {
        this.dataTable = data;
        this._loader.hide();
        console.log(data);
      }
    })
  }

  initFormMovie(): void {
    this.formMovie = new FormGroup({
      movie_name_spanish: new FormControl('', [Validators.required]),
      movie_name_english: new FormControl('', [Validators.required]),
      movie_description: new FormControl('', [Validators.required]),
      movie_trailer: new FormControl('', [Validators.required]),
      movie_actors: new FormControl('', [Validators.required]),
      movie_release_date: new FormControl('', [Validators.required]),
      movie_duration: new FormControl('', [Validators.required]),
      movie_classification: new FormControl('', [Validators.required]),
      movie_availability: new FormControl('', [Validators.required]),
      movie_director: new FormControl('', [Validators.required]),
      origin_country: new FormControl('', [Validators.required]),
      gender_movies: new FormControl('', [Validators.required]),
      language_movie: new FormControl('', [Validators.required]),
    })
  }

  sendRegisterMovie(): void {
    if (this.formMovie.valid) {
      this._loader.show();
      const dataMovieRegister: RegisterMovie = {
        movie_name_spanish: this.formMovie.get('movie_name_spanish')?.value,
        movie_name_english: this.formMovie.get('movie_name_english')?.value,
        movie_description: this.formMovie.get('movie_description')?.value,
        movie_trailer: this.formMovie.get('movie_trailer')?.value,
        movie_actors: this.formMovie.get('movie_actors')?.value,
        movie_release_date: this.formMovie.get('movie_release_date')?.value,
        movie_duration: this.formMovie.get('movie_duration')?.value,
        movie_classification: this.formMovie.get('movie_classification')?.value,
        movie_availability: this.formMovie.get('movie_availability')?.value,
        movie_director: this.formMovie.get('movie_director')?.value,
        // origin_country: this.formMovie.get('origin_country')?.value,
        origin_country: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        gender_movies: this.formMovie.get('gender_movies')?.value,
        language_movie: this.formMovie.get('language_movie')?.value,
      }
      this._movie.registerMovie(dataMovieRegister).subscribe({
        next: () => {
          this._loader.hide();
          this._alert.success('Pelicula registrada con exito')
          this.getMovieTable(new HttpParams());
        },
        error: (error) => {
          console.error(error.error.message)
          this._alert.error('¡Oops! Parece que hubo un problema al intentar registrar la pelicula.');
          this._loader.hide();
        }
      })

    } else {
      this._loader.hide();
      this._alert.warning('Faltan campos por llenar')
    }
  }

  getGenderMovie() {
    this._movie.getGenderMovie().subscribe({
      next: (data) => {
        this.dataGenderMovie = data;
      }
    })
  }

  getLanguageMovie() {
    this._movie.getLanguageMovie().subscribe({
      next: (data) => {
        console.log(data);
        this.dataLanguageMovie = data;
      }
    })
  }

  changeGender(_event: Select): void {
    const validators = [Validators.required, Validators.maxLength(15)];
    this.formMovie?.get('gender_movies')?.reset();
    this.formMovie?.get('gender_movies')?.setValidators(validators);
    this.formMovie?.get('gender_movies')?.updateValueAndValidity();
  }

  changeLanguage(_event: Select): void {
    const validators = [Validators.required, Validators.maxLength(15)];
    this.formMovie?.get('language_movie')?.reset();
    this.formMovie?.get('language_movie')?.setValidators(validators);
    this.formMovie?.get('language_movie')?.updateValueAndValidity();
  }

}
