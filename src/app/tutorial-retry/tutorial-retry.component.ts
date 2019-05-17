import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ServicesService } from './services.service';
import { doOnSubscribe } from './observable-pipes.utils';



@Component({
  selector: 'app-tutorial-retry',
  templateUrl: './tutorial-retry.component.html',
  styleUrls: ['tutorial-retry.component.scss'],
})
export class TutorialRetryComponent implements OnInit {
  serviceLoading = false;
  serviceError = true;

  serviceResponse: any = null;
  serviceObservablePipe: Observable<any>;


  constructor(
    private readonly testService: ServicesService,
  ) { }

  ngOnInit() {
    this.serviceObservablePipe = this.testService.testSevice().pipe(
      doOnSubscribe(() => {
        // Resetting on retry
        this.serviceLoading = true;
        this.serviceError = false;
      }),
      map(response => {
        this.serviceLoading = false;
        this.serviceResponse = response;
      }),
      catchError(() => {
        this.serviceLoading = false;
        this.serviceError = true;

        return of(null);
      })
    );

    // this.serviceObservablePipe.subscribe();
  }

}
