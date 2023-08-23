import { Component, Input } from '@angular/core';
import { FavoriteStorageService } from 'src/app/service/favorite-storage.service';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.less'],
})
export class FavoriteButtonComponent {
  @Input() data: any = {};

  isLoading: boolean = false;
  isFav: boolean = false;
  favorites: any;
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

  addFavorite(movie: any) {
    this.favoriteService.addFavorite(movie);
  }

  deleteFavorite(movie: any) {
    this.favoriteService.deleteFavorite(movie);
  }

  checkFavorite() {
    const index = this.favorites.findIndex(
      (item: any) => item.id === this.data.id
    );
    if (index >= 0) {
      this.isFav = true;
    }
  }

  onFavClick(movie: any): void {
    this.changeFav();
    const index = this.favorites.findIndex((item: any) => item.id === movie.id);

    if (index < 0) {
      this.addFavorite(movie);
    } else {
      this.deleteFavorite(movie);
    }
  }
}
