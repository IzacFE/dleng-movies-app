import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
})
export class NavbarComponent implements OnInit {
  params$: any;

  constructor(
    private readonly router: Router,
    private readonly rootRoute: ActivatedRoute
  ) {
    this.params$ = router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map((e) => this.getParams(this.rootRoute))
    );
  }

  ngOnInit(): void {
    this.paramsSnapshot();
  }

  paramsSnapshot() {
    console.log(this.getParams(this.rootRoute));

    return this.getParams(this.rootRoute);
  }

  private getParams(route: ActivatedRoute) {
    // route param names (eg /a/:personId) must be ditinct within
    // a route otherwise they'll be overwritten
    let params = route.url;
    // params = { ...route.snapshot.queryParams, ...params };
    // if (route.children) {
    //   for (let r of route.children) {
    //     params = { ...this.getParams(r), ...params };
    //   }
    // }
    return params;
  }
}
