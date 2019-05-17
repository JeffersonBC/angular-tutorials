import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HomeTutorialsListComponent } from './home/home-tutorials-list/home-tutorials-list.component';


const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { path: '', component: HomeTutorialsListComponent, },

      { path: 'tutorials/retry',
        loadChildren: './tutorial-retry/tutorial-retry.module#TutorialRetryModule' },

      { path: '**', redirectTo: '' },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
