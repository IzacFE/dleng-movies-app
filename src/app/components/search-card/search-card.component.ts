import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.less'],
})
export class SearchCardComponent {
  @Input() data: any = {};
}
