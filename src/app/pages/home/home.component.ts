import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent {
  constructor(private meta: Meta, private title: Title) {
    this.setSEO();
  }

  setSEO() {
    this.title.setTitle('DLENG Movies Website');
    this.meta.addTags([
      {
        name: 'description',
        content:
          'DLENG is contain of movies list with reviews, trailer, details and many other usefull informations',
      },
      {
        name: 'keywords',
        content:
          'Movies, Reviews, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast',
      },
      { name: 'robots', content: 'index,follow' },
    ]);
  }
}
