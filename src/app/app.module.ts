import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ScatterplotComponent } from './scatterplot/scatterplot.component';
import { MealAnalysisComponent } from './meal-analysis/meal-analysis.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LookupComponent } from './lookup/lookup.component';

import { FoodService } from "./food.service";
import { GraphComponent } from './scatterplot/graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScatterplotComponent,
    MealAnalysisComponent,
    HomepageComponent,
    LookupComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    MatAutocompleteModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
