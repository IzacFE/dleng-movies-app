import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class FavoriteStorageService {
  favorites: Movie[];

  constructor() {
    this.favorites = JSON.parse(localStorage.getItem('favorites')!) || [];
  }

  getFavorites() {
    return of(this.favorites);
  }

  addFavorite(favorite: Movie) {
    this.favorites?.push(favorite);
    localStorage.clear();
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  deleteFavorite(favorite: Movie) {
    const index = this.favorites?.findIndex(
      (movie: Movie) => movie.id === favorite.id
    );
    this.favorites?.splice(index!, 1);
    localStorage.clear();
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  clearAllLocalStorage() {
    localStorage.clear();
  }
}
