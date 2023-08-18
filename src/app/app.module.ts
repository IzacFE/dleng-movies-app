import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { DetailComponent } from './pages/detail/detail.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HttpClientModule } from '@angular/common/http';
import { TmdbApiServiceService } from './service/tmdb-api-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { FavoriteButtonComponent } from './components/favorite-button/favorite-button.component';
import { SearchCardComponent } from './components/search-card/search-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    DetailComponent,
    MoviesComponent,
    FavoritesComponent,
    NavbarComponent,
    ButtonComponent,
    MovieCardComponent,
    ContactComponent,
    ErrorComponent,
    MenuBarComponent,
    FavoriteButtonComponent,
    SearchCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    YouTubePlayerModule,
  ],
  providers: [TmdbApiServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
