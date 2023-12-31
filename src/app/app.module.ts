import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

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
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { FavoriteButtonComponent } from './components/favorite-button/favorite-button.component';
import { SearchCardComponent } from './components/search-card/search-card.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { SlideCardComponent } from './components/slide-card/slide-card.component';
import { TrendingCardsComponent } from './components/trending-cards/trending-cards.component';
import { DetailCardComponent } from './components/detail-card/detail-card.component';
import { VideoComponent } from './components/video/video.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    DetailComponent,
    MoviesComponent,
    FavoritesComponent,
    NavbarComponent,
    MovieCardComponent,
    ContactComponent,
    ErrorComponent,
    MenuBarComponent,
    FavoriteButtonComponent,
    SearchCardComponent,
    HeroBannerComponent,
    StarRatingComponent,
    SlideCardComponent,
    TrendingCardsComponent,
    DetailCardComponent,
    VideoComponent,
    ContactFormComponent,
    ScrollTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    YouTubePlayerModule,
    InfiniteScrollModule,
    SweetAlert2Module,
  ],
  providers: [TmdbApiServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
