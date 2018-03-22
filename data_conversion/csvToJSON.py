import json
import csv

f = open("menu.csv", "r")

jsonArray = []

reader = csv.DictReader(f)
idNum = 0

for row in reader:
    idNum += 1
    newRow = row
    newRow["id"] = idNum
    newRow["Calories"] = int(row["Calories"])
    newRow["Calories from Fat"] = int(row["Calories from Fat"])
    newRow["Total Fat (% Daily Value)"] = int(row["Total Fat (% Daily Value)"])
    newRow["Total Fat"] = float(row["Total Fat"])
    newRow["Saturated Fat"] = float(row["Saturated Fat"])
    newRow["Saturated Fat (% Daily Value)"] = int(row["Saturated Fat (% Daily Value)"])
    newRow["Trans Fat"] = float(row["Trans Fat"])
    newRow["Cholesterol"] = int(row["Cholesterol"])
    newRow["Cholesterol (% Daily Value)"] = int(row["Cholesterol (% Daily Value)"])
    newRow["Sodium"] = int(row["Sodium"])
    newRow["Sodium (% Daily Value)"] = int(row["Sodium (% Daily Value)"])
    newRow["Carbohydrates"] = int(row["Carbohydrates"])
    newRow["Carbohydrates (% Daily Value)"] = int(row["Carbohydrates (% Daily Value)"])
    newRow["Dietary Fiber (% Daily Value)"] = int(row["Dietary Fiber (% Daily Value)"])
    newRow["Dietary Fiber"] = int(row["Dietary Fiber"])
    newRow["Sugars"] = int(row["Sugars"])
    newRow["Protein"] = int(row["Protein"])
    newRow["Vitamin A (% Daily Value)"] = int(row["Vitamin A (% Daily Value)"])
    newRow["Vitamin C (% Daily Value)"] = int(row["Vitamin C (% Daily Value)"])
    newRow["Calcium (% Daily Value)"] = int(row["Calcium (% Daily Value)"])
    newRow["Iron (% Daily Value)"] = int(row["Iron (% Daily Value)"])
    jsonArray.append(newRow)

f.close()

f = open("menu.json", "w")

json.dump(jsonArray, f, indent=1)
