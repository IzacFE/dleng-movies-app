import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbApiServiceService } from 'src/app/service/tmdb-api-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less'],
})
export class DetailComponent implements OnInit {
  constructor(
    private service: TmdbApiServiceService,
    private router: ActivatedRoute
  ) {}
  getMovieDetailResult: any;
  getMovieVideosResult: any;
  getMovieCastResult: any;
  loading = 0;

  ngOnInit(): void {
    let getParamId: string | null = this.router.snapshot.paramMap.get('id');
    this.getMovieData(getParamId);
    this.getMovieVideos(getParamId);
    this.getMovieCast(getParamId);
  }

  getMovieData(id: string | null) {
    this.service.getMovieDetails(id).subscribe((result) => {
      console.log(result);
      this.getMovieDetailResult = result;
      this.loading++;
    });
  }

  getMovieVideos(id: string | null) {
    this.service.getMovieVideo(id).subscribe((result) => {
      console.log(result);
      this.getMovieVideosResult = result.results;
      this.loading++;
    });
  }

  getMovieCast(id: string | null) {
    this.service.getMovieCast(id).subscribe((result) => {
      console.log(result);
      this.getMovieCastResult = result;
      this.loading++;
    });
  }
}
