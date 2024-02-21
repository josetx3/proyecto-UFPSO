import { Component } from '@angular/core';
import {LoadingService} from "@app/core/services/loading.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto-UFPSO';
  loading = this._loader.loading$;

  constructor(
    private _loader: LoadingService
  ) {
  }
}
