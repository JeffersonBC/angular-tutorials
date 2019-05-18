import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { components } from './components';
import { initFontAwesome } from './utils/font-awesome.util';


initFontAwesome();

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
})
export class SharedModule { }
