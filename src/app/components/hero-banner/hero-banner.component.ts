import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { TmdbApiServiceService } from 'src/app/service/tmdb-api-service.service';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.less'],
})
export class HeroBannerComponent implements OnInit, OnDestroy {
  bannerLoad: boolean = false;
  bannerResult: Movie[] = [];

  currentIndex: number = 0;
  timeoutId?: number;
  constructor(private service: TmdbApiServiceService) {}

  ngOnInit(): void {
    this.resetTimer();
    this.bannerData();
  }

  bannerData() {
    this.bannerLoad = true;
    this.service.trendingMovieApiData().subscribe((result) => {
      this.bannerResult = result.results;
    });
    this.bannerLoad = false;
  }

  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }

  resetTimer() {
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

  getCurrentSlideUrl() {
    return this.bannerResult[this.currentIndex];
  }
}
