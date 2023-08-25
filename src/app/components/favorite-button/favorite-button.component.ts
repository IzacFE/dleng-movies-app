import { Component, Input } from '@angular/core';
import { takeUntil } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { FavoriteStorageService } from 'src/app/service/favorite-storage.service';
import { Unsub } from 'src/app/utils/unsub.class';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.less'],
})
export class FavoriteButtonComponent extends Unsub {
  @Input() data!: Movie;

  isLoading: boolean = false;
  isFav: boolean = false;
  favorites!: Movie[];

  constructor(private favoriteService: FavoriteStorageService) {
    super();
  }

  ngOnInit(): void {
    this.changeLoad();
    this.favoriteService
      .getFavorites()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (favorites) => {
          this.favorites = favorites;
        },
        (err) => {
          console.log('HTTP Error', err);
        },
        () => {
          this.checkFavorite();
          this.changeLoad();
        }
      );
  }

  changeLoad(): void {
    this.isLoading = !this.isLoading;
  }

  changeFav(): void {
    this.isFav = !this.isFav;
  }

  addFavorite(movie: Movie): void {
    this.favoriteService.addFavorite(movie);
  }

  deleteFavorite(movie: Movie): void {
    this.favoriteService.deleteFavorite(movie);
  }

  checkFavorite(): void {
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
