import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ScatterplotComponent } from './scatterplot/scatterplot.component';
import { MealAnalysisComponent } from './meal-analysis/meal-analysis.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LookupComponent } from './lookup/lookup.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScatterplotComponent,
    MealAnalysisComponent,
    HomepageComponent,
    LookupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
