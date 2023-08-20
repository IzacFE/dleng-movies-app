import { Component, Input } from '@angular/core';
import { TmdbApiServiceService } from 'src/app/service/tmdb-api-service.service';

@Component({
  selector: 'app-slide-card',
  templateUrl: './slide-card.component.html',
  styleUrls: ['./slide-card.component.less'],
})
export class SlideCardComponent {
  @Input() type!: string;

  dataLoad: boolean = false;
  dataResult: any = this.service;

  constructor(private service: TmdbApiServiceService) {}
  ngOnInit(): void {
    if (this.type === 'Upcoming') {
      this.upComingData();
    } else if (this.type === 'Now Playing') {
      this.nowPlayingData();
    }
  }

  upComingData() {
    this.dataLoad = true;
    this.service.getUpcomingMovies().subscribe((result) => {
      console.log(result, 'trendingResult');
      this.dataResult = result.results;
    });
    this.dataLoad = false;
  }

  nowPlayingData() {
    this.dataLoad = true;
    this.service.getNowPlayingMovies().subscribe((result) => {
      console.log(result, 'actionResult');
      this.dataResult = result.results;
    });
    this.dataLoad = false;
  }
}
