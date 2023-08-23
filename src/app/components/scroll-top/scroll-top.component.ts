import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.less'],
})
export class ScrollTopComponent {
  isShow: string = '';

  @HostListener('document:scroll') scrollover() {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      this.isShow = 'show';
    } else {
      this.isShow = '';
    }
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
