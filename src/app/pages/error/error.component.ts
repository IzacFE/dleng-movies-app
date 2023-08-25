import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.less'],
})
export class ErrorComponent {
  constructor(private meta: Meta, private title: Title) {
    this.setSEO();
  }

  setSEO(): void {
    this.title.setTitle('DLENG Page is Not Found');
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Page is cannot be found, check your page link for mistakes and try again',
      },
      {
        name: 'keywords',
        content: 'Error, 404, Page',
      },
      { name: 'robots', content: 'index,follow' },
    ]);
  }
}
