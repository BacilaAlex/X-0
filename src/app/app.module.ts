import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatratComponent } from './patrat/patrat.component';
import { TableScoreComponent } from './table-score/table-score.component';

@NgModule({
  declarations: [AppComponent, PatratComponent, TableScoreComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
