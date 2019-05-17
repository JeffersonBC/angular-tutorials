import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { TutorialRetryRoutingModule } from './tutorial-retry-routing.module';
import { TutorialRetryComponent } from './tutorial-retry.component';
import { RetryComponent } from './retry/retry.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    TutorialRetryRoutingModule,

    SharedModule,
  ],
  declarations: [
    TutorialRetryComponent,
    RetryComponent,
  ],
})
export class TutorialRetryModule { }
