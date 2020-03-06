import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import { CardModule } from '../card/card.component';
import { LazyCardModule } from '../lazy-card/lazy-card.module';


@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    LazyRoutingModule,
    CardModule,
    LazyCardModule
  ]
})
export class LazyModule { }
