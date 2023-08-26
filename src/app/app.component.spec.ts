import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { DetailComponent } from './pages/detail/detail.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        MoviesComponent,
        DetailComponent,
        FavoritesComponent,
        ContactComponent,
        ErrorComponent,
        NavbarComponent,
      ],
    }).compileComponents()
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'DLENG Movies Website'`, () => {
    let pageTitle: Title = TestBed.inject(Title);
    setTimeout(() => {
      expect(pageTitle.getTitle()).toEqual('DLENG Movies Website');
    }, 500);
  });

  it('should navigate to the default path = ""', () => {
    const location: Location = TestBed.inject(Location);
    expect(location.path()).toBe('');
  });
});
