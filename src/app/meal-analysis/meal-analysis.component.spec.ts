import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealAnalysisComponent } from './meal-analysis.component';

describe('MealAnalysisComponent', () => {
  let component: MealAnalysisComponent;
  let fixture: ComponentFixture<MealAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
