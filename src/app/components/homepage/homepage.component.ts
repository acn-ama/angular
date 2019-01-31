import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /**
     * endpoint httpcall
     *
     * http://localhost:3500/cart - GET
     * http://localhost:3500/saveCart - POST
     */
  }

}
