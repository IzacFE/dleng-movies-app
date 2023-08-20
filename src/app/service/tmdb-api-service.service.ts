import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
  trendingMovieApiData(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/popular?api_key=${this.tmdbApiKey}`
    );
  }

  // Top Rated
  getTopRatedMovies(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/top_rated?api_key=${this.tmdbApiKey}&with_genres=28`
    );
  }

  // Upcoming
  getUpcomingMovies(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/top_rated?api_key=${this.tmdbApiKey}&with_genres=28`
    );
  }

  // Now Playing
  getNowPlayingMovies(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/now_playing?api_key=${this.tmdbApiKey}&with_genres=28`
    );
  }

  // searchmovive
  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');

    return this.http.get(
      `${this.baseUrl}/search/movie?api_key=${this.tmdbApiKey}&query=${data.searchName}`
    );
  }

  // getmoviedatails
  getMovieDetails(data: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${data}?api_key=${this.tmdbApiKey}`
    );
  }

  // getMovieVideo
  getMovieVideo(data: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${data}/videos?api_key=${this.tmdbApiKey}`
    );
  }

  // getMovieCast
  getMovieCast(data: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${data}/credits?api_key=${this.tmdbApiKey}`
    );
  }
}
