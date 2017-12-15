import { Component, OnInit } from '@angular/core';
import { FoodService } from "../food.service";

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css']
})
export class LookupComponent implements OnInit {

  foodItems: Array<any>;

  constructor(private foodService: FoodService) {
  }

  ngOnInit() {
    this.foodService.loadFood().subscribe(
        (response: Array<any>) => this.foodItems = response,
        (error) => console.log(error)
    )
  }

  printFood() {
      this.foodItems.forEach(d => {
        console.log(d["Item"])
      })
  }

}
