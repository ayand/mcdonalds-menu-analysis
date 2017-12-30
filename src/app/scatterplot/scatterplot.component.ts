import { Component, OnInit } from '@angular/core';
import { FoodService } from "../food.service";

@Component({
  selector: 'app-scatterplot',
  templateUrl: './scatterplot.component.html',
  styleUrls: ['./scatterplot.component.css']
})
export class ScatterplotComponent implements OnInit {

  foodItems: Array<any>;
  drinkItems: Array<any>;
  nutrientCategories: Array<any>;

  drinkX: string;
  drinkY: string;
  foodX: string;
  foodY: string;

  constructor(private foodService: FoodService) {
  }

  ngOnInit() {
    this.foodService.loadFood().subscribe(
        (response: Array<any>) => {
            this.foodItems = response.filter(d => {
                return d["Category"] == "Breakfast"
                    || d["Category"] == "Beef & Pork"
                    || d["Category"] == "Chicken & Fish"
                    || d["Category"] == "Salads"
                    || d["Category"] == "Snacks & Sides"
                    || d["Category"] == "Desserts";
            });

            this.drinkItems = response.filter(d => {
                return d["Category"] == "Beverages"
                    || d["Category"] == "Coffee & Tea"
                    || d["Category"] == "Smoothies & Shakes";
            });

            this.nutrientCategories = [
                "Calories",
                "Calories from Fat",
                "Total Fat",
                "Total Fat (% Daily Value)",
                "Saturated Fat",
                "Saturated Fat (% Daily Value)",
                "Trans Fat",
                "Cholesterol",
                "Cholesterol (% Daily Value)",
                "Sodium",
                "Sodium (% Daily Value)",
                "Carbohydrates",
                "Carbohydrates (% Daily Value)",
                "Dietary Fiber",
                "Dietary Fiber (% Daily Value)",
                "Sugars",
                "Protein",
                "Vitamin A (% Daily Value)",
                "Vitamin C (% Daily Value)",
                "Iron (% Daily Value)"
            ];

            this.foodX = "Calories";
            this.foodY = "Calories";
            this.drinkX = "Calories";
            this.drinkY = "Calories";
        },
        (error) => console.log(error)
    )
  }

  setVariable(variable: string, value: string) {
      if (variable == "drinkX") {
          this.drinkX = value;
      } else if (variable == "drinkY") {
          this.drinkY = value;
      } else if (variable == "foodX") {
          this.foodX = value;
      } else {
          this.foodY = value;
      }
  }

}
