import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PastyListComponent } from './pastry-list/pasty-list.component';
import { PastryListDetailsComponent } from './pastry-list-details/pastry-list-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { cake } from 'src/mock';

@NgModule({
  declarations: [
    AppComponent,
    PastyListComponent,
    PastryListDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
