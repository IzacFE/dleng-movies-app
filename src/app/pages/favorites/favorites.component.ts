import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { FavoriteStorageService } from 'src/app/service/favorite-storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.less'],
})
export class FavoritesComponent implements OnInit {
  favorites!: Movie[];
  loading: boolean = false;

  constructor(private favoriteService: FavoriteStorageService) {}

  ngOnInit(): void {
    this.loading = true;
    this.favoriteService.getFavorites().subscribe(
      (favorites) => {
        this.favorites = favorites;
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.loading = false;
      }
    );
  }

  addFavorite(movie: Movie) {
    this.favoriteService.addFavorite(movie);
  }

  deleteFavorite(todo: Movie) {
    this.favoriteService.deleteFavorite(todo);
  }
}
