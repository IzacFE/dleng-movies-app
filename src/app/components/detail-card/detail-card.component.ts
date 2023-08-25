import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs';
import { Cast } from 'src/app/models/cast';
import { Movie } from 'src/app/models/movie';
import { TmdbApiServiceService } from 'src/app/service/tmdb-api-service.service';
import { Unsub } from 'src/app/utils/unsub.class';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.less'],
})
export class DetailCardComponent extends Unsub implements OnInit {
  getMovieDetailResult!: Movie;
  getMovieCastResult: Cast[] = [];
  loading = 0;

  constructor(
    private service: TmdbApiServiceService,
    private router: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    let getParamId: string | null = this.router.snapshot.paramMap.get('id');
    this.getMovieData(getParamId);
    this.getMovieCast(getParamId);
  }

  getMovieData(id: string | null): void {
    this.service
      .getMovieDetails(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((result) => {
        this.getMovieDetailResult = result;
        this.loading++;
      });
  }

  getMovieCast(id: string | null): void {
    this.service
      .getMovieCast(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((result) => {
        this.getMovieCastResult = result.cast;
        this.loading++;
      });
  }
}
