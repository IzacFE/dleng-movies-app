import { Component, OnInit } from '@angular/core';
import { TmdbApiServiceService } from 'src/app/service/tmdb-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  loading: boolean = false;
  constructor(private service: TmdbApiServiceService) {}
  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
  }

  bannerResult: any = [];
  trendingResult: any = [];
  // bannerdata
  bannerData() {
    this.loading = true;
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult');
      this.bannerResult = result.results;
    });
    this.loading = false;
  }

  trendingData() {
    this.loading = true;
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingResult');
      this.trendingResult = result.results;
    });
    this.loading = false;
  }
}
