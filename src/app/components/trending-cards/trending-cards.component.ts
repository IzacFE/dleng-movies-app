import { Component, OnInit } from '@angular/core';
import { TmdbApiServiceService } from 'src/app/service/tmdb-api-service.service';

@Component({
  selector: 'app-trending-cards',
  templateUrl: './trending-cards.component.html',
  styleUrls: ['./trending-cards.component.less'],
})
export class TrendingCardsComponent implements OnInit {
  dataLoad: boolean = false;
  dataResult: any = this.service;

  constructor(private service: TmdbApiServiceService) {}
  ngOnInit(): void {
    this.trendingData();
  }

  trendingData() {
    this.dataLoad = true;
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingResult');
      this.dataResult = result.results;
    });
    this.dataLoad = false;
  }
}
