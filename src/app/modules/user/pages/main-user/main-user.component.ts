import {Component, OnInit, signal, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.scss']
})
export class MainUserComponent implements OnInit {

  handlerMenu: WritableSignal<boolean> = signal(false);

  ngOnInit(): void {
  }

  handler() {
    this.handlerMenu.update(() => !this.handlerMenu());
  }

}
