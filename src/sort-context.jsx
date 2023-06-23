import { useContext, createContext } from "react";
import { snacks } from "./data";
import { useState } from "react";

export const SortContext = createContext();

export function SortProvider({ children }) {
  const [snackData, setSnackData] = useState(snacks);
  const [toggle, setToggle] = useState({
    id: true,
    productName: true,
    price: true,
    calories: true,
    weight: true,
    ingredients: true,
  });

  const idSort = () => {
    const snackList = [...snacks];

    const idAscendingSorted = Array.from(snackList).sort((a, b) => a.id - b.id);
    const idDescendingSorted = Array.from(snackList).sort(
      (a, b) => b.id - a.id
    );

    toggle.id === true && setSnackData(idDescendingSorted);
    toggle.id === false && setSnackData(idAscendingSorted);
  };

  const productSort = () => {
    const snackList = [...snacks];

    const productAscendingSort = Array.from(snackList).sort((a, b) => {
      if (a.product_name < b.product_name) return -1;
      if (a.product_name > b.product_name) return 1;
      return 0;
    });

    const productDescendingSort = Array.from(snackList).sort((a, b) => {
      if (b.product_name < a.product_name) return -1;
      if (b.product_name > a.product_name) return 1;
      return 0;
    });

    toggle.productName === true && setSnackData(productAscendingSort);
    toggle.productName === false && setSnackData(productDescendingSort);
  };

  const priceSort = () => {
    const snackList = [...snacks];

    const priceAscendingSorted = Array.from(snackList).sort(
      (a, b) => a.price - b.price
    );
    const priceDescendingSorted = Array.from(snackList).sort(
      (a, b) => b.price - a.price
    );

    toggle.price === true && setSnackData(priceDescendingSorted);
    toggle.price === false && setSnackData(priceAscendingSorted);
  };

  const calorieSort = () => {
    const snackList = [...snacks];

    const calorieAscendingSorted = Array.from(snackList).sort(
      (a, b) => a.calories - b.calories
    );
    const calorieDescendingSorted = Array.from(snackList).sort(
      (a, b) => b.calories - a.calories
    );

    toggle.calories === true && setSnackData(calorieAscendingSorted);
    toggle.calories === false && setSnackData(calorieDescendingSorted);
  };

  const weightSort = () => {
    const snackList = [...snacks];

    const weightAscendingSorted = Array.from(snackList).sort(
      (a, b) =>
        Number(a.product_weight.slice(0, -1)) -
        Number(b.product_weight.slice(0, -1))
    );

    const weightDescendingSorted = Array.from(snackList).sort(
      (a, b) =>
        Number(b.product_weight.slice(0, -1)) -
        Number(a.product_weight.slice(0, -1))
    );

    toggle.weight === true && setSnackData(weightAscendingSorted);
    toggle.weight === false && setSnackData(weightDescendingSorted);
  };

  const ingredientSort = () => {
    const snackList = [...snacks];

    const ingredientAscendingSort = Array.from(snackList).sort((a, b) => {
      if (a.ingredients < b.ingredients) return -1;
      if (a.ingredients > b.ingredients) return 1;
      return 0;
    });

    const ingredientDescendingSort = Array.from(snackList).sort((a, b) => {
      if (b.ingredients < a.ingredients) return -1;
      if (b.ingredients > a.ingredients) return 1;
      return 0;
    });

    toggle.ingredients === true && setSnackData(ingredientAscendingSort);
    toggle.ingredients === false && setSnackData(ingredientDescendingSort);
  };

  /*
    id: 2,
      product_name: "Fruit and Nut Mix",
      product_weight: "73g",
      price: 749,
      calories: 353,
      ingredients:
    */

  return (
    <SortContext.Provider
      value={{
        snackData,
        setSnackData,
        idSort,
        productSort,
        priceSort,
        calorieSort,
        weightSort,
        ingredientSort,
        toggle,
        setToggle,
      }}
    >
      {children}
    </SortContext.Provider>
  );
}

export const useSortSnacks = () => useContext(SortContext);
