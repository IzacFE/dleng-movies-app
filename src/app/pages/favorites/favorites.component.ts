import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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

  constructor(
    private favoriteService: FavoriteStorageService,
    private meta: Meta,
    private title: Title
  ) {
    this.setSEO();
  }

  setSEO() {
    this.title.setTitle('DLENG Personal Favorite List');
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Your personal favorite list of movies, add and adjust your list of favorite movies',
      },
      {
        name: 'keywords',
        content:
          'Favorite,List,Personal,Movies, Reviews, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast',
      },
      { name: 'robots', content: 'index,follow' },
    ]);
  }

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
