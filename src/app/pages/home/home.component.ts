import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listMovies: [];

  constructor(
    private homeService: HomeService
  ) {
    this.homeService.getListMovies().subscribe((response) => {
      this.listMovies = response;
    });
  }

  ngOnInit() {
  }

}
