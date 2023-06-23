import { useContext,createContext } from "react";
import { snacks } from "./data";
import { useState } from "react";

export const SortContext = createContext(); 

export function SortProvider({children}) { 

    const a = 5; 
    const [ snackData, setSnackData ] = useState(snacks); 
    const [ toggle, setToggle ] = useState({
        id: true,
        productName: true,
    })
    
    const idSort = () => { 
        const idAscendingSorted = Array.from(snacks).sort((a,b)=> a.id-b.id)
        const idDescendingSorted = Array.from(snacks).sort((a,b)=> b.id-a.id)
        toggle.id===true && setSnackData(idDescendingSorted);
        toggle.id===false &&  setSnackData(idAscendingSorted);
    }

    const productSort = () => { 
        const productAscendingSort = Array.from(snacks).sort((a,b)=> a.product_name[0]-b.product_name[0]);
        console.log("product ascending", productAscendingSort)
        const productDescendingSort = Array.from(snacks).sort((a,b)=> b.product_name[0]-a.product_name[0])
        console.log("product descending", productDescendingSort)

        toggle.productName===true && setSnackData([...productAscendingSort])
        toggle.productName===false && setSnackData([...productDescendingSort])
    }

    /*
    id: 2,
      product_name: "Fruit and Nut Mix",
      product_weight: "73g",
      price: 749,
      calories: 353,
      ingredients:
    */


    return (
        <SortContext.Provider value={{snackData, setSnackData, idSort, productSort, toggle, setToggle}}> 
            {children}
        </SortContext.Provider>
    );
    

}

export const useSortSnacks = () => useContext(SortContext)