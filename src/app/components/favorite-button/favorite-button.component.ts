import { Component, Input } from '@angular/core';
import { FavoriteStorageService } from 'src/app/service/favorite-storage.service';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.less'],
})
export class FavoriteButtonComponent {
  @Input() data: any = {};

  isFav: string = '';
  favorites: any;
  constructor(private favoriteService: FavoriteStorageService) {}
  ngOnInit(): void {
    this.favoriteService.getFavorites().subscribe((favorites) => {
      this.favorites = favorites;
    });
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
    if (index > 0) {
      this.isFav = 'favorite';
    } else {
      this.isFav = '';
    }
  }

  onFavClick(movie: any): void {
    const index = this.favorites.findIndex((item: any) => item.id === movie.id);

    if (index < 0) {
      this.addFavorite(movie);
      this.isFav = '';
    } else {
      this.deleteFavorite(movie);
      this.isFav = 'favorite';
    }
  }
}
