import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.less'],
})
export class StarRatingComponent {
  @Input() data: number = 0;
}
