import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie';
import { Casts, Movies } from '../models/tmdbResponse';
import { Video } from '../models/video';
import { Cast } from '../models/cast';

@Injectable({
  providedIn: 'root',
})
export class TmdbApiServiceService {
  private tmdbApiKey: string | null;
  private baseUrl: string | null;
  constructor(private http: HttpClient) {
    this.tmdbApiKey = environment.tmdbApiKey;
    this.baseUrl = environment.baseUrl;
  }

  // trendingmovieapidata
  infiniteMovieApiData(page: number): Observable<Movies<Movie>> {
    return this.http.get<Movies<Movie>>(
      `${this.baseUrl}/movie/popular?api_key=${this.tmdbApiKey}&page=${page}`
    );
  }

  // trendingmovieapidata
  trendingMovieApiData(): Observable<Movies<Movie>> {
    return this.http.get<Movies<Movie>>(
      `${this.baseUrl}/movie/popular?api_key=${this.tmdbApiKey}&page=1`
    );
  }

  // Top Rated
  getTopRatedMovies(): Observable<Movies<Movie>> {
    return this.http.get<Movies<Movie>>(
      `${this.baseUrl}/movie/top_rated?api_key=${this.tmdbApiKey}&with_genres=28`
    );
  }

  // Upcoming
  getUpcomingMovies(): Observable<Movies<Movie>> {
    return this.http.get<Movies<Movie>>(
      `${this.baseUrl}/movie/top_rated?api_key=${this.tmdbApiKey}&with_genres=28`
    );
  }

  // Now Playing
  getNowPlayingMovies(): Observable<Movies<Movie>> {
    return this.http.get<Movies<Movie>>(
      `${this.baseUrl}/movie/now_playing?api_key=${this.tmdbApiKey}&with_genres=28`
    );
  }

  // searchmovive
  getSearchMovie(
    data: string | null,
    page: number | null
  ): Observable<Movies<Movie>> {
    return this.http.get<Movies<Movie>>(
      `${this.baseUrl}/search/movie?api_key=${this.tmdbApiKey}&query=${data}&page=${page}`
    );
  }

  // getmoviedatails
  getMovieDetails(id: string | null): Observable<Movie> {
    return this.http.get<Movie>(
      `${this.baseUrl}/movie/${id}?api_key=${this.tmdbApiKey}`
    );
  }

  // getMovieVideo
  getMovieVideo(id: string | null): Observable<Movies<Video>> {
    return this.http.get<Movies<Video>>(
      `${this.baseUrl}/movie/${id}/videos?api_key=${this.tmdbApiKey}`
    );
  }

  // getMovieCast
  getMovieCast(id: string | null): Observable<Casts<Cast>> {
    return this.http.get<Casts<Cast>>(
      `${this.baseUrl}/movie/${id}/credits?api_key=${this.tmdbApiKey}`
    );
  }
}
