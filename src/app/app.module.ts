import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';


import { FigureComponent } from './components/figure/figure.component';
import { DeveloperComponent } from './components/developer/developer.component';
import { DialogHistoryComponent } from './components/dialog-history/dialog-history.component';
import { DataHistoryComponent } from './data-history/data-history.component';

@NgModule({
  declarations: [
    AppComponent,
    FigureComponent,
    DeveloperComponent,
    DialogHistoryComponent,
    DataHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule
  ],
  entryComponents: [
    DialogHistoryComponent,
    DataHistoryComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
