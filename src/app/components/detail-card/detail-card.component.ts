import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbApiServiceService } from 'src/app/service/tmdb-api-service.service';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.less'],
})
export class DetailCardComponent implements OnInit {
  constructor(
    private service: TmdbApiServiceService,
    private router: ActivatedRoute
  ) {}
  getMovieDetailResult: any;
  getMovieVideosResult: any;
  getMovieCastResult: any[] = [];
  loading = 0;

  ngOnInit(): void {
    let getParamId: string | null = this.router.snapshot.paramMap.get('id');
    this.getMovieData(getParamId);
    this.getMovieCast(getParamId);
  }

  getMovieData(id: string | null) {
    this.service.getMovieDetails(id).subscribe((result) => {
      this.getMovieDetailResult = result;
      this.loading++;
    });
  }

  getMovieCast(id: string | null) {
    this.service.getMovieCast(id).subscribe((result) => {
      this.getMovieCastResult = result.cast;
      this.loading++;
    });
  }
}
