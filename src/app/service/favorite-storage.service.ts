import { Injectable } from '@angular/core';
import { of } from 'rxjs';
export interface Favorites {
  id: string;
  title: string;
  isCompleted: boolean;
  date: Date;
}
@Injectable({
  providedIn: 'root',
})
export class FavoriteStorageService {
  favorites: any;

  constructor() {
    this.favorites = JSON.parse(localStorage.getItem('favorites')!) || [];
  }

  getFavorites() {
    return of(this.favorites);
  }

  addFavorite(todo: any) {
    this.favorites.push(todo);
    localStorage.clear();
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  deleteFavorite(todo: any) {
    const index = this.favorites.findIndex(
      (currentObj: any) => currentObj.id === todo.id
    );
    this.favorites.splice(index, 1);
    localStorage.clear();
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  clearAllLocalStorage() {
    localStorage.clear();
  }
}
