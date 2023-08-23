import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { TmdbApiServiceService } from 'src/app/service/tmdb-api-service.service';

@Component({
  selector: 'app-trending-cards',
  templateUrl: './trending-cards.component.html',
  styleUrls: ['./trending-cards.component.less'],
})
export class TrendingCardsComponent implements OnInit {
  dataLoad: boolean = false;
  dataResult: Movie[] = [];

  constructor(private service: TmdbApiServiceService) {}
  ngOnInit(): void {
    this.trendingData();
  }

  trendingData() {
    this.dataLoad = true;
    this.service.trendingMovieApiData().subscribe((result) => {
      this.dataResult = result.results;
    });
    this.dataLoad = false;
  }
}
