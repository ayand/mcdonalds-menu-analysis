import { Component, OnInit } from '@angular/core';
import { FoodService } from "./food.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private foodService: FoodService) {}

  ngOnInit() {
      this.foodService.loadFood().subscribe(
          (response: Array<any>) => console.log('Done'),
          (error) => console.log(error)
      )
  }

}
