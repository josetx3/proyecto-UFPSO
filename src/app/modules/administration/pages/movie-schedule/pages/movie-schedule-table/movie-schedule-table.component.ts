import {Component, OnInit} from '@angular/core';
import {HttpParams} from "@angular/common/http";
import {AlertService} from "@app/core/services/alert.service";
import {SelectService} from "@app/core/services/select.service";
import {LoadingService} from "@app/core/services/loading.service";
import {TableActions, TableColumn} from "@app/core/interfaces/table.interface";
import {MovieScheduleService} from "@app/modules/administration/pages/movie-schedule/services/movie-schedule.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MovieSchedule} from "@app/modules/administration/pages/movies/interfaces/movie.interface";
import {Router} from "@angular/router";
import {Select} from "@app/core/interfaces/select.interface";

@Component({
  selector: 'app-movie-schedule-table',
  templateUrl: './movie-schedule-table.component.html',
  styleUrls: ['./movie-schedule-table.component.scss']
})
export class MovieScheduleTableComponent implements OnInit {

  title: string = 'Registrar Horario';
  image: string = './assets/img/profile-user.png';

  showRegisterMovieSchedule: boolean = false;

  movie_id: string = '';
  minDate = new Date(new Date().setHours(new Date().getHours()));
  dataMovieHome: Select[] = [];

  /**
   * DATOS PARA LA TABLA
   */

  size: number = 0;
  pageIndex: number = 0;
  totalElements: number = 0;
  isPageable: boolean = false;
  dataTable: any[] = [];

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

  columnsTable: TableColumn[] = [
    {name: 'Nombre', isFilterable: true, key: 'movie_name_spanish', type: 'text'},
    {name: 'Duracion', isFilterable: true, key: 'movie_duration', type: 'text'},
    {name: 'Fecha', isFilterable: true, key: 'movie_release_date', type: 'text'},
  ];

  /**
   *PARTE DEL FORMULARIO
   */
  public formMovieSchedule: FormGroup = new FormGroup({});


  constructor(
    private router: Router,
    private _alert: AlertService,
    private _select: SelectService,
    private _loader: LoadingService,
    private _movieSchedule: MovieScheduleService,
  ) {
  }

  ngOnInit() {
    this.getScheduleMovie(new HttpParams());
  }

  //OBTENER LOS DATOS PARA LISTARLOS EN LA TABLA
  getScheduleMovie(params: HttpParams): void {
    this._loader.show();
    this._movieSchedule.getDataSchedule(params).subscribe({
      next: (data): void => {
        this.dataTable = data;
        this._loader.hide();
      }, error: (e): void => {
        this._loader.hide();
        this._alert.warning('Estamos presentando problemas, intenta mas tarde')
      }
    })
  }

  getMovieScheduleHomeSelect(): void {
    this._select.getScheduleMovieHome().subscribe({
      next: (data: Select[]): void => {
        this.dataMovieHome = data;
      }, error: (e): void => {
        this._alert.warning('Tenemos problemas al obtener las peliculas, reintenta mas tarde');
      }
    })
  }

  changeSchedule(_event: Select): void {
    const validators = [Validators.required];
  }

  initFormMovieSchedule(): void {
    this.formMovieSchedule = new FormGroup({
      movie_id: new FormControl('', [Validators.required]),
      movie_schedule_price: new FormControl('', [Validators.required]),
      movie_schedule_presentation: new FormControl('', [Validators.required]),
      movie_schedule_video_quality: new FormControl('', [Validators.required]),
    })
  }

  //GUARDAR LA FECHA DE LE FUNCION
  setDate(): void {
    this.minDate = new Date(new Date().setHours(new Date().getHours()));
    this.formMovieSchedule.get('movie_schedule_presentation')?.setValue(this.minDate);
    setTimeout(() => {
      this.formMovieSchedule.get('movie_schedule_presentation')?.setValue(null);
    }, 1)
  }

  //CAMBIAR DE VISTA PARA REGISTRAR UNA HORA
  showScheduleMovie(): void {
    this.showRegisterMovieSchedule = !this.showRegisterMovieSchedule;
    this.formMovieSchedule.reset();
    // setTimeout(() => {
    this.initFormMovieSchedule();
    this.getMovieScheduleHomeSelect();
    this.formMovieSchedule.reset();
    // }, 1000)
  }

  sendRegisterSchedule(): void {
    if (this.formMovieSchedule.valid) {
      this._loader.show();
      //DAR FORMATO A LA FECHA
      const movieReleaseDate: Date = this.formMovieSchedule.get('movie_schedule_presentation')?.value;
      const dia = movieReleaseDate.getDate();
      const mes = movieReleaseDate.getMonth() + 1;
      const año = movieReleaseDate.getFullYear();
      const fechaFormateada = año + '-' + (mes < 10 ? '0' : '') + mes + '-' + (dia < 10 ? '0' : '') + dia;
      const hora = movieReleaseDate.getHours();
      const minutos = movieReleaseDate.getMinutes();
      const segundos = movieReleaseDate.getSeconds();
      const horaFormateada = (hora < 10 ? '0' : '') + hora + ':' + (minutos < 10 ? '0' : '') + minutos + ':' + (segundos < 10 ? '0' : '') + segundos;
      const dateMovie = `${fechaFormateada}T${horaFormateada}`;


      let dataMovieSchedule: MovieSchedule = {
        movie_id: this.formMovieSchedule.get('movie_id')?.value,
        movie_schedule_price: this.formMovieSchedule.get('movie_schedule_price')?.value,
        movie_schedule_presentation: dateMovie,
        movie_schedule_video_quality: this.formMovieSchedule.get('movie_schedule_video_quality')?.value,
      };
      this._movieSchedule.setMovieSchedule(dataMovieSchedule).subscribe({
        next: () => {
          // this.edit = false;
          this.formMovieSchedule.reset();
          this.router.navigateByUrl('/administration/movies_schedule').then();
          this._loader.hide();
          this._alert.success('Fecha para ver la pelicula registradas con exito');
        },
        error: (error) => {
          console.error(error);
          this._alert.error('¡Oops! Parece que hubo un problema al intentar registrar la pelicula.');
          this._loader.hide();
        }
      });
    } else {
      this._loader.hide();
      this._alert.warning('Faltan campos por llenar');
    }
  }


  edit(data: any): void {
  }

  unlockMovie(id_movie: any): void {
  }

}
