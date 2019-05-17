import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss'],
})
export class RetryComponent {

  @Input() tryAgainObservable: Observable<any>;

  retry() {
    this.tryAgainObservable.subscribe();
  }

}
