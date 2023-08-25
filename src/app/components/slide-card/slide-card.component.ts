import { Component, Input } from '@angular/core';
import { takeUntil } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { TmdbApiServiceService } from 'src/app/service/tmdb-api-service.service';
import { Unsub } from 'src/app/utils/unsub.class';

@Component({
  selector: 'app-slide-card',
  templateUrl: './slide-card.component.html',
  styleUrls: ['./slide-card.component.less'],
})
export class SlideCardComponent extends Unsub {
  @Input() type!: string;

  dataLoad: boolean = false;
  dataResult!: Movie[];

  constructor(private service: TmdbApiServiceService) {
    super();
  }

  ngOnInit(): void {
    if (this.type === 'Upcoming') {
      this.upComingData();
    } else if (this.type === 'Now Playing') {
      this.nowPlayingData();
    }
  }

  upComingData(): void {
    this.dataLoad = true;
    this.service
      .getUpcomingMovies()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((result) => {
        this.dataResult = result.results;
      });
    this.dataLoad = false;
  }

  nowPlayingData(): void {
    this.dataLoad = true;
    this.service
      .getNowPlayingMovies()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((result) => {
        this.dataResult = result.results;
      });
    this.dataLoad = false;
  }
}
