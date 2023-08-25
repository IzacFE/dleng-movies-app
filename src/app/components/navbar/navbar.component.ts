import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
})
export class NavbarComponent {
  navbg: string = '';

  @HostListener('document:scroll') scrollover(): void {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navbg = 'scroll';
    } else {
      this.navbg = '';
    }
  }
}
