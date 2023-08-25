import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { takeUntil } from 'rxjs';
import { MovieCardComponent } from 'src/app/components/movie-card/movie-card.component';
import { Movie } from 'src/app/models/movie';
import { TmdbApiServiceService } from 'src/app/service/tmdb-api-service.service';
import { Unsub } from 'src/app/utils/unsub.class';
MovieCardComponent;
@Component({
  selector: 'app-list',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.less'],
})
export class MoviesComponent extends Unsub implements OnInit {
  movies!: Movie[];
  loading: boolean = false;

  items: string[] = [];
  isLoading = false;
  currentPage = 1;
  itemsPerPage = 10;

  constructor(
    private service: TmdbApiServiceService,
    private meta: Meta,
    private title: Title
  ) {
    super();
    this.setSEO();
  }

  setSEO(): void {
    this.title.setTitle('DLENG Movies List');
    this.meta.addTags([
      {
        name: 'description',
        content: 'DLENG list of movies to browse and check',
      },
      {
        name: 'keywords',
        content:
          'Movies, Reviews, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast',
      },
      { name: 'robots', content: 'index,follow' },
    ]);
  }

  ngOnInit(): void {
    this.trendingData();
  }

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }

  trendingData() {
    this.loading = true;
    this.service
      .trendingMovieApiData(this.currentPage)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (response) => {
          this.movies = response.results;
        },
        error: (err) => console.log(err),
        complete: () => {
          this.loading = false;
        },
      });
  }

  appendData() {
    this.toggleLoading();
    this.service
      .trendingMovieApiData(this.currentPage)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (response) =>
          (this.movies = [...this.movies, ...response.results]),
        error: (err) => console.log(err),
        complete: () => {
          this.toggleLoading();
        },
      });
  }

  onScroll() {
    this.currentPage++;
    this.appendData();
  }
}
