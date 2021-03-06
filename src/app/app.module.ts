import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AlertMessageComponent} from './alert-message/alert-message.component';
import {CardModule} from './card/card.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { PaginationComponent } from './pagination/pagination.component';
import { LazyCardModule } from './lazy-card/lazy-card.module';

@NgModule({
  declarations: [
    AppComponent,
    AlertMessageComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    AppRoutingModule,
    CardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    LazyCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
