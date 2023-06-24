import "./App.css";
import { useState } from "react";
import { snacks } from "./data";
import { useSortSnacks } from "./sort-context";

export function SnackTable() {
  const {
    snackData,
    idSort,
    toggle,
    setToggle,
    productSort,
    priceSort,
    calorieSort,
    weightSort,
    ingredientSort,
    search, 
    searchHandler
  } = useSortSnacks();

  return (
    <>
      <h1> Snack Table </h1>
      <input
        type="text"
        placeholder="Search with products or ingredients"
        className="input-table"
        value={search}
        onChange={searchHandler}
      />

      <table>
        <thead>
          <tr>
            {/* id sort */}
            <th
              onClick={() => {
                setToggle({ ...toggle, id: !toggle.id });
                idSort();
              }}
            >
              ID
            </th>

            {/* product name sort */}
            <th
              onClick={() => {
                setToggle({ ...toggle, productName: !toggle.productName });
                productSort();
              }}
            >
              Product Name
            </th>

            {/* weight sort */}
            <th
              onClick={() => {
                setToggle({ ...toggle, weight: !toggle.weight });
                weightSort();
              }}
            >
              Product Weight
            </th>

            {/* price sort */}
            <th
              onClick={() => {
                setToggle({ ...toggle, price: !toggle.price });
                priceSort();
              }}
            >
              Price (INR)
            </th>

            {/* calorie sort */}
            <th
              onClick={() => {
                setToggle({ ...toggle, calories: !toggle.calories });
                calorieSort();
              }}
            >
              Calories
            </th>

            {/* ingredientSort */}
            <th
              onClick={() => {
                setToggle({ ...toggle, ingredients: !toggle.ingredients });
                ingredientSort();
              }}
            >
              Ingredients
            </th>
          </tr>
        </thead>

        <tbody>
          {snackData.map((item) => {
            return (
              <tr key={item.id}>
                <td> {item.id} </td>
                <td> {item.product_name}</td>
                <td> {item.product_weight} </td>
                <td> {item.price} </td>
                <td> {item.calories} </td>
                <td> {item.ingredients.join(", ")} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
