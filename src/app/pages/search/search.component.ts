import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TmdbApiServiceService } from 'src/app/service/tmdb-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
})
export class SearchComponent implements OnInit {
  searchResult: any;
  loading: boolean = false;
  constructor(private service: TmdbApiServiceService) {}

  ngOnInit(): void {
    // this.trendingData();
  }

  searchForm = new FormGroup({
    searchName: new FormControl(null),
  });

  submitForm() {
    this.loading = true;
    console.log(this.searchForm.value, 'searchForm');
    this.service.getSearchMovie(this.searchForm.value).subscribe((result) => {
      console.log(result, 'resultMovie');
      this.searchResult = result.results;
      this.loading = false;
    });
  }
}
