import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialRetryComponent } from './tutorial-retry.component';

const routes: Routes = [
  { path: '', component: TutorialRetryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRetryRoutingModule { }
