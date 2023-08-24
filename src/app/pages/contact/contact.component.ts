import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less'],
})
export class ContactComponent {
  constructor(private meta: Meta, private title: Title) {
    this.setSEO();
  }

  setSEO() {
    this.title.setTitle('DLENG Movie Contact Page');
    this.meta.addTags([
      {
        name: 'description',
        content:
          'DLENG contact page to send question, suggestion, and other messages',
      },
      {
        name: 'keywords',
        content: 'Contact, Question, Suggestion, Message, Help',
      },
      { name: 'robots', content: 'index,follow' },
    ]);
  }
}
