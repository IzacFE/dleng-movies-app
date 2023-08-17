import { Component, HostListener } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
})
export class NavbarComponent {
  constructor() {}

  params$: any;
  navbg: string = '';

  searchForm = new FormGroup({
    searchName: new FormControl(null),
  });

  submitForm() {
    console.log(this.searchForm.value, 'searchForm');
  }

  @HostListener('document:scroll') scrollover() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navbg = 'scroll';
    } else {
      this.navbg = '';
    }
  }
}
