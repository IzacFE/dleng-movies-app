import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.less'],
})
export class MovieCardComponent implements OnInit {
  @Input() data: any = {};

  constructor() {}

  ngOnInit(): void {}
}
