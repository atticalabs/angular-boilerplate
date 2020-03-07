import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyCardComponent } from './lazy-card.component';



@NgModule({
  declarations: [LazyCardComponent],
  imports: [
    CommonModule
  ],
  exports:[LazyCardComponent]
})
export class LazyCardModule { }
