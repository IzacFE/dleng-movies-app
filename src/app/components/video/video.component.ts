import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs';
import { Video } from 'src/app/models/video';
import { TmdbApiServiceService } from 'src/app/service/tmdb-api-service.service';
import { Unsub } from 'src/app/utils/unsub.class';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.less'],
})
export class VideoComponent extends Unsub implements OnInit {
  getMovieVideosResult: Video[] = [];
  loading: boolean = true;

  constructor(
    private service: TmdbApiServiceService,
    private router: ActivatedRoute
  ) {
    super();
  }

  changeLoad(): void {
    this.loading = !this.loading;
  }

  ngOnInit(): void {
    let getParamId: string | null = this.router.snapshot.paramMap.get('id');
    this.getMovieVideos(getParamId);
  }

  getMovieVideos(id: string | null): void {
    this.changeLoad();
    this.service
      .getMovieVideo(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((result) => {
        this.getMovieVideosResult = result.results;
        this.changeLoad();
      });
  }
}
