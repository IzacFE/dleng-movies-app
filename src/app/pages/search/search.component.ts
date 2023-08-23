import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Movie } from 'src/app/models/movie';
import { TmdbApiServiceService } from 'src/app/service/tmdb-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
})
export class SearchComponent {
  searchResult!: Movie[];
  loading: boolean = false;

  items: string[] = [];
  isLoading = false;
  currentPage = 1;
  itemsPerPage = 10;

  constructor(private service: TmdbApiServiceService) {}

  searchForm = new FormGroup({
    searchName: new FormControl(null),
  });

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }

  submitForm() {
    this.loading = true;
    this.service
      .getSearchMovie(this.searchForm.value.searchName!, 1)
      .subscribe((result) => {
        this.searchResult = result.results;
        this.loading = false;
      });
  }

  appendData() {
    this.toggleLoading();
    this.service
      .getSearchMovie(this.searchForm.value.searchName!, this.currentPage)
      .subscribe({
        next: (response) =>
          (this.searchResult = [...this.searchResult, ...response.results]),
        error: (err) => console.log(err),
        complete: () => {
          this.toggleLoading();
        },
      });
  }

  onScroll() {
    this.currentPage++;
    this.appendData();
  }
}
