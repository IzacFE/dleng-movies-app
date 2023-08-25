import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { TmdbApiServiceService } from 'src/app/service/tmdb-api-service.service';
import { Unsub } from 'src/app/utils/unsub.class';

@Component({
  selector: 'app-trending-cards',
  templateUrl: './trending-cards.component.html',
  styleUrls: ['./trending-cards.component.less'],
})
export class TrendingCardsComponent extends Unsub implements OnInit {
  dataLoad: boolean = false;
  dataResult: Movie[] = [];

  constructor(private service: TmdbApiServiceService) {
    super();
  }

  ngOnInit(): void {
    this.trendingData();
  }

  changeLoad(): void {
    this.dataLoad = !this.dataLoad;
  }

  trendingData(): void {
    this.changeLoad();
    this.service
      .trendingMovieApiData(1)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((result) => {
        this.dataResult = result.results;
      });
    this.changeLoad();
  }
}
