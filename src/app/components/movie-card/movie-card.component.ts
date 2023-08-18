import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FavoriteStorageService } from 'src/app/service/favorite-storage.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.less'],
})
export class MovieCardComponent implements OnInit {
  @Input() isFav: boolean = false;
  @Input() data: any = {};

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

  onFavClick(movie: any): void {
    const index = this.favorites.findIndex((item: any) => item.id === movie.id);
    console.log(movie, 'movie');
    console.log(this.favorites, 'fav');
    console.log(index, 'index');

    if (index < 0) {
      this.addFavorite(movie);
    } else {
      this.deleteFavorite(movie);
    }
  }
}
