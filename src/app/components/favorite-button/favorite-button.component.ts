import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { FavoriteStorageService } from 'src/app/service/favorite-storage.service';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.less'],
})
export class FavoriteButtonComponent {
  @Input() data!: Movie;

  isLoading: boolean = false;
  isFav: boolean = false;
  favorites!: Movie[];

  constructor(private favoriteService: FavoriteStorageService) {}
  ngOnInit(): void {
    this.isLoading = true;
    this.favoriteService.getFavorites().subscribe(
      (favorites) => {
        this.favorites = favorites;
      },
      (err) => {
        console.log('HTTP Error', err);
      },
      () => {
        this.checkFavorite();
      }
    );
  }

  changeFav() {
    this.isFav = !this.isFav;
  }

  addFavorite(movie: Movie) {
    this.favoriteService.addFavorite(movie);
  }

  deleteFavorite(movie: Movie) {
    this.favoriteService.deleteFavorite(movie);
  }

  checkFavorite() {
    const index = this.favorites.findIndex(
      (item: Movie) => item.id === this.data.id
    );
    if (index >= 0) {
      this.isFav = true;
    }
  }

  onFavClick(movie: Movie): void {
    this.changeFav();
    const index = this.favorites.findIndex(
      (item: Movie) => item.id === movie.id
    );

    if (index < 0) {
      this.addFavorite(movie);
    } else {
      this.deleteFavorite(movie);
    }
  }
}
