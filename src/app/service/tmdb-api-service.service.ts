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
  baseurl = 'https://api.themoviedb.org/3/';
  apikey = '3f0aa236e7a556d530e4471b209446b9';

  // trendingmovieapidata
  trendingMovieApiData(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/movie/popular?api_key=${this.apikey}`
    );
  }

  // Top Rated
  getTopRatedMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/movie/top_rated?api_key=${this.apikey}&with_genres=28`
    );
  }

  // Upcoming
  getUpcomingMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/movie/top_rated?api_key=${this.apikey}&with_genres=28`
    );
  }

  // Now Playing
  getNowPlayingMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/movie/now_playing?api_key=${this.apikey}&with_genres=28`
    );
  }

  // searchmovive
  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');

    return this.http.get(
      `${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.searchName}`
    );
  }

  // getmoviedatails
  getMovieDetails(data: any): Observable<any> {
    return this.http.get(
      `${this.baseurl}/movie/${data}?api_key=${this.apikey}`
    );
  }

  // getMovieVideo
  getMovieVideo(data: any): Observable<any> {
    return this.http.get(
      `${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`
    );
  }

  // getMovieCast
  getMovieCast(data: any): Observable<any> {
    return this.http.get(
      `${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`
    );
  }
}
