import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from  './homepage/homepage.component';
import { MealAnalysisComponent } from './meal-analysis/meal-analysis.component';
import { HeaderComponent } from './header/header.component';
import { ScatterplotComponent } from './scatterplot/scatterplot.component';
import { LookupComponent } from './lookup/lookup.component';

const appRoutes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'browse', component: LookupComponent },
    { path: 'select', component: ScatterplotComponent },
    { path: 'meal-analysis', component: MealAnalysisComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}
