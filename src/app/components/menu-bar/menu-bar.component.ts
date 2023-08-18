import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.less'],
})
export class MenuBarComponent {
  @Input() location: string = '';

  constructor() {}
  navbg: string = '';

  @HostListener('document:scroll') scrollover() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navbg = 'scroll';
    } else {
      this.navbg = '';
    }
  }
}
