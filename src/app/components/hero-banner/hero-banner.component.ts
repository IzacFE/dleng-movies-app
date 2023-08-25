import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { TmdbApiServiceService } from 'src/app/service/tmdb-api-service.service';
import { Unsub } from 'src/app/utils/unsub.class';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.less'],
})
export class HeroBannerComponent extends Unsub implements OnInit {
  bannerLoad: boolean = false;
  bannerResult: Movie[] = [];

  currentIndex: number = 0;
  timeoutId?: number;
  constructor(private service: TmdbApiServiceService) {
    super();
  }

  ngOnInit(): void {
    this.resetTimer();
    this.bannerData();
  }

  changeLoad(): void {
    this.bannerLoad = !this.bannerLoad;
  }

  bannerData(): void {
    this.changeLoad();
    this.service
      .trendingMovieApiData(1)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((result) => {
        this.bannerResult = result.results;
        this.changeLoad();
      });
  }

  resetTimer(): void {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 6000);
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.bannerResult.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  getCurrentSlideUrl(): Movie {
    return this.bannerResult[this.currentIndex];
  }
}
