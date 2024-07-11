import { createContext } from "react";

export const todoItemContext = createContext({
    todoItems : [],
    addNewItem :  ()=>{},
    deleteItem: ()=>{},
})