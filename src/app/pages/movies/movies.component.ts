import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from 'src/app/components/movie-card/movie-card.component';
import { Movies } from 'src/app/model/movie';
import { TmdbApiServiceService } from 'src/app/service/tmdb-api-service.service';
MovieCardComponent;
@Component({
  selector: 'app-list',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.less'],
})
export class MoviesComponent implements OnInit {
  movies: any;
  loading: boolean = false;

  constructor(private service: TmdbApiServiceService) {}

  ngOnInit(): void {
    this.trendingData();
  }

  trendingData() {
    this.loading = true;
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'movies');
      this.movies = result.results;
      this.loading = false;
    });
  }
}
