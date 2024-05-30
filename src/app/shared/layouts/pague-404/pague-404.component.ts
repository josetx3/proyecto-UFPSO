import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pague-404',
  templateUrl: './pague-404.component.html',
  styleUrls: ['./pague-404.component.scss']
})
export class Pague404Component implements OnInit {

  constructor(
    private route: Router,
  ) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.route.navigateByUrl('home').then();
    }, 1000)
  }

}
