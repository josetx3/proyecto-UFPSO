import {Component} from '@angular/core';
import {TableActions, TableColumn} from "@app/core/interfaces/table.interface";
import {AlertService} from "@app/core/services/alert.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.scss'],
  providers: [DatePipe]
})
export class MoviesTableComponent {
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
    private _alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.getMovieTable();
  }

  createMovie(): void {

  }

  edit(data: any): void {

  }

  unlockMovie(user: any): void {
  }

  getMovieTable(): void {
    this.dataTable = this.movies;
  }

}
