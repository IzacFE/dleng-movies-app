import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from 'src/app/components/movie-card/movie-card.component';
import { Movies } from 'src/app/model/movie';
import { TmdbApiServiceService } from 'src/app/service/tmdb-api-service.service';
MovieCardComponent;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
})
export class ListComponent implements OnInit {
  movies: any;
  loading: boolean = false;

  constructor(private service: TmdbApiServiceService) {}

  ngOnInit(): void {
    this.trendingData();
  }

  trendingData() {
    this.loading = true;
    this.service.trendingMovieApiData().subscribe((result) => {
      // console.log(result, 'trendingResult');
      this.movies = result.results;
      this.loading = false;
    });
  }
}
