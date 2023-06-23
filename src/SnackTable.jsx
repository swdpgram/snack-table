import "./App.css";
import { useState } from "react";
import { snacks } from "./data";
import { useSortSnacks } from "./sort-context";

export function SnackTable() {
  const { snackData, idSort, toggle, setToggle, productSort } = useSortSnacks();

  return (
    <>
      <h1> Snack Table </h1>
      <input
        type="text"
        placeholder="Search with products or ingredients"
        className="input-table"
      />

      <table>
        <thead>
          <th
            onClick={() => {
              setToggle({ ...toggle, id: !toggle.id });
              idSort();
            }}
          >
            ID
          </th>

          <th
            onClick={() => {
              setToggle({ ...toggle, id: !toggle.productName });
              productSort();
            }}
          >
           
            Product Name
          </th>

          <th> Product Weight </th>
          <th> Price (INR) </th>
          <th> Calories </th>
          <th> Ingredients </th>
        </thead>

        <tbody>
          {snackData.map((item) => {
            return (
              <tr>
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
