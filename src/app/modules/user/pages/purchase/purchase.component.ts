import {Component, ElementRef, OnInit} from '@angular/core';
import {PurchaseService} from "@app/modules/user/services/purchase.service";
import {Chairs} from "@app/modules/user/interfaces/purchase.interface";
import {AlertService} from "@app/core/services/alert.service";
import {MovieScheduleService} from "@app/modules/administration/pages/movie-schedule/services/movie-schedule.service";
import {LoadingService} from "@app/core/services/loading.service";
import {MatDialog} from "@angular/material/dialog";
import {VideoScreenComponent} from "@app/shared/layouts/video-screen/video-screen.component";
import {MovieService} from "@app/modules/user/services/movie.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  screen: number = 1;
  //FOOD
  quantityFood: number = 0;
  //ID PARA LAS SILLAS
  scheduleId: string = '';

  //Datos de la pelicula
  movieId: any = '';
  dataMovie: any = [];

  public chairs: Chairs[] = [];

  chairsA: Chairs[] = [];
  chairsB: Chairs[] = [];
  chairsC: Chairs[] = [];
  chairsD: Chairs[] = [];
  chairsE: Chairs[] = [];
  chairsF: Chairs[] = [];
  chairsG: Chairs[] = [];
  selectedChairs: Chairs[] = [];

  //TOOLTIP PARA LAS SILLAS Y VALIDAR LA CLASE DE LAS PRIMEARS SILLAS
  tooltipChairId: string | null = null;
  isFirstRow: boolean = false;

  constructor(
    private _dialog: MatDialog,
    private _alert: AlertService,
    private _movie: MovieService,
    private _loader: LoadingService,
    private sanitizer: DomSanitizer,
    private _purchase: PurchaseService,
    private _schedule: MovieScheduleService,
  ) {
    this._loader.show();
  }

  ngOnInit() {
    setTimeout(() => {
      //Obtener los datos de la pelicula
      this.scheduleId = this._schedule.getScheduleId();
      this.movieId = this._movie.getMovieIdPurchase();
      this.getMovieId();
      this.getDataChair();
    })
  }

  getMovieId() {
    this._movie.getMovieId(this.movieId).subscribe({
      next: (data) => {
        this.dataMovie = data;
        this._loader.hide();
      }
    })
  }

  getTrailerUrl(): SafeResourceUrl {
    if (this.dataMovie && this.dataMovie.movie_trailer) {
      const videoUrl = this.dataMovie.movie_trailer.split('v=')[1];
      if (videoUrl) {
        const url = `https://www.youtube.com/embed/${videoUrl}`;
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl('');
  }

  increment() {
    this.quantityFood++;
  }

  decrement() {
    if (this.quantityFood > 0) {
      this.quantityFood--;
    }
  }

  //CAMBIAR DE VISTA
  nextScreen(screen: number) {
    switch (screen) {
      case 1:
        this.screen = screen;
        break;
      case 2:
        this.screen = screen;
        break;
    }
  }

  //OBTENER LA DATA DE LAS SILLAS
  getDataChair() {
    this._purchase.getDAtaChairIdSchedule(this.scheduleId).subscribe({
      next: (data: Chairs[]) => {
        this.chairs = data;
        this.chairsA = this.sortByColumn(this.chairs.filter(chair => chair.row.charAt(0) === 'A'));
        this.chairsB = this.sortByColumn(this.chairs.filter(chair => chair.row.charAt(0) === 'B'));
        this.chairsC = this.sortByColumn(this.chairs.filter(chair => chair.row.charAt(0) === 'C'));
        this.chairsD = this.sortByColumn(this.chairs.filter(chair => chair.row.charAt(0) === 'D'));
        this.chairsE = this.sortByColumn(this.chairs.filter(chair => chair.row.charAt(0) === 'E'));
        this.chairsF = this.sortByColumn(this.chairs.filter(chair => chair.row.charAt(0) === 'F'));
        this.chairsG = this.sortByColumn(this.chairs.filter(chair => chair.row.charAt(0) === 'G'));
      }
    });
  }

  //ORDENAR LAS SILLAS
  sortByColumn(chairs: Chairs[]): Chairs[] {
    return chairs.sort((a, b) => +a.column - +b.column);
  }

  //SELECCIONAR LAS SILLAS PARA COMPRARLAS
  toggleSelectChair(chair: Chairs): void {
    if (chair.status_place_to_sit && !chair.occupied_place_to_sit) {
      const index = this.selectedChairs.findIndex(selected => selected.place_to_sit_id === chair.place_to_sit_id);
      if (index === -1) {
        if (this.selectedChairs.length < 5) {
          this.selectedChairs.push(chair);
        } else {
          this._alert.warning('No se pueden seleccionar más de 5 sillas');
        }
      } else {
        this.selectedChairs.splice(index, 1);
      }
      this._purchase.updateSelectedChairs(this.selectedChairs);
    }
  }

  isSelected(chair: Chairs): boolean {
    return this.selectedChairs.some(selected => selected.place_to_sit_id === chair.place_to_sit_id);
  }

  showTooltip(chairId: string, chairRow: string): void {
    this.tooltipChairId = chairId;
    this.isFirstRow = chairRow === 'A';
  }

  hideTooltip(): void {
    this.tooltipChairId = null;
    this.isFirstRow = false;
  }

  executeOptionA(chair: Chairs): void {
    this.toggleSelectChair(chair);
  }

  executeOptionB(chair: Chairs): void {
    console.log('Opción B seleccionada para la silla:', chair);
    const dialogRef = this._dialog.open(VideoScreenComponent, {});
    dialogRef.afterClosed().subscribe(() => {
      console.log('El diálogo se ha cerrado y se ha salido de pantalla completa.');
    });
  }


}
