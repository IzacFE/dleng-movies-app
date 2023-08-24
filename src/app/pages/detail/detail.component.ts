import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less'],
})
export class DetailComponent {
  constructor(private meta: Meta, private title: Title) {
    this.setSEO();
  }

  setSEO() {
    this.title.setTitle('DLENG Movie Detail Page');
    this.meta.addTags([
      {
        name: 'description',
        content:
          'DLENG detail movie page is contain of reviews, trailer, details and many other usefull informations of a movie',
      },
      {
        name: 'keywords',
        content:
          'Movies, Detail, Reviews, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast',
      },
      { name: 'robots', content: 'index,follow' },
    ]);
  }
}
