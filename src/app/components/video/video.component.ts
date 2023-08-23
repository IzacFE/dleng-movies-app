import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from 'src/app/models/video';
import { TmdbApiServiceService } from 'src/app/service/tmdb-api-service.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.less'],
})
export class VideoComponent implements OnInit {
  constructor(
    private service: TmdbApiServiceService,
    private router: ActivatedRoute
  ) {}
  getMovieVideosResult: Video[] = [];
  loading: boolean = true;

  ngOnInit(): void {
    let getParamId: string | null = this.router.snapshot.paramMap.get('id');
    this.getMovieVideos(getParamId);
  }

  getMovieVideos(id: string | null) {
    this.loading = true;
    this.service.getMovieVideo(id).subscribe((result) => {
      this.getMovieVideosResult = result.results;
      this.loading = false;
    });
  }
}
