import { Component, OnInit } from '@angular/core';
import { FavoriteStorageService } from 'src/app/service/favorite-storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.less'],
})
export class FavoritesComponent implements OnInit {
  favorites: any;
  loading: boolean = false;

  constructor(private favoriteService: FavoriteStorageService) {}

  ngOnInit(): void {
    this.loading = true;
    this.favoriteService.getFavorites().subscribe((favorites) => {
      this.favorites = favorites;
      this.loading = false;
    });
  }

  addFavorite(movie: any) {
    this.favoriteService.addFavorite(movie);
  }

  deleteFavorite(todo: any) {
    this.favoriteService.deleteFavorite(todo);
  }
}
