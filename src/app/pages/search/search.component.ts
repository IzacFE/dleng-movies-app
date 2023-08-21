import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TmdbApiServiceService } from 'src/app/service/tmdb-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
})
export class SearchComponent {
  searchResult: any;
  loading: boolean = false;
  constructor(private service: TmdbApiServiceService) {}

  searchForm = new FormGroup({
    searchName: new FormControl(null),
  });

  submitForm() {
    this.loading = true;
    this.service
      .getSearchMovie(this.searchForm.value.searchName!)
      .subscribe((result) => {
        this.searchResult = result.results;
        this.loading = false;
      });
  }
}
