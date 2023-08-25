import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { TmdbApiServiceService } from 'src/app/service/tmdb-api-service.service';
import { Unsub } from 'src/app/utils/unsub.class';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
})
export class SearchComponent extends Unsub {
  searchResult!: Movie[];
  loading: boolean = false;

  items: string[] = [];
  isLoading = false;
  currentPage = 1;
  itemsPerPage = 10;

  constructor(private service: TmdbApiServiceService) {
    super();
  }

  searchForm = new FormGroup({
    searchName: new FormControl(null),
  });

  toggleLoading(): void {
    this.isLoading = !this.isLoading;
  }

  submitForm(): void {
    this.loading = true;
    this.service
      .getSearchMovie(this.searchForm.value.searchName!, 1)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((result) => {
        this.searchResult = result.results;
        this.loading = false;
      });
  }

  appendData(): void {
    this.toggleLoading();
    this.service
      .getSearchMovie(this.searchForm.value.searchName!, this.currentPage)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (response) =>
          (this.searchResult = [...this.searchResult, ...response.results]),
        error: (err) => console.log(err),
        complete: () => {
          this.toggleLoading();
        },
      });
  }

  onScroll(): void {
    this.currentPage++;
    this.appendData();
  }
}
