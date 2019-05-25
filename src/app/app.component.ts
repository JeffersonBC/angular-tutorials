import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { AnalyticsService } from './shared/services/analytics.service';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor (
    private readonly analyticsService: AnalyticsService,
    private readonly angularticsGoogleService: Angulartics2GoogleAnalytics,
    // private readonly router: Router,
  ) { }

  ngOnInit() {
    this.analyticsService.init();

    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     (window as any).ga('set', 'page', event.urlAfterRedirects);
    //     (window as any).ga('send', 'pageview');
    //   }
    // });

    this.angularticsGoogleService.startTracking();
  }

 }
