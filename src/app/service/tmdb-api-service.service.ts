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
  infiniteMovieApiData(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/popular?api_key=${this.tmdbApiKey}&page=${page}`
    );
  }
  // trendingmovieapidata
  trendingMovieApiData(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/popular?api_key=${this.tmdbApiKey}&page=1`
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
  getSearchMovie(data: string | null): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/search/movie?api_key=${this.tmdbApiKey}&query=${data}`
    );
  }

  // getmoviedatails
  getMovieDetails(id: string | null): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${id}?api_key=${this.tmdbApiKey}`
    );
  }

  // getMovieVideo
  getMovieVideo(id: string | null): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${id}/videos?api_key=${this.tmdbApiKey}`
    );
  }

  // getMovieCast
  getMovieCast(id: string | null): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${id}/credits?api_key=${this.tmdbApiKey}`
    );
  }
}
