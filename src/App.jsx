import TodoHead from "./TodoHead";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";
import ErrorMessage from "./ErrorMessage";
import { useState } from "react";
import { todoItemContext } from "./store/todo-item-store";

function App() {
   let initialtodoItems = [
    {
      name: "Go to GYM",
      date : "18/03/2024"
    },
    {
      name : "Eat Burger",
      date : "19/03/2024"
    },
    {
      name : "Walk 400 Calories",
      date : "17/03/2024"
    },
]

let [toItems, settoItems] = useState(initialtodoItems);

 let addNewItem = (name, date)=>{
      // console.log(name, date);
      let newTodoItems =  [...toItems, {name: name, date: date}];
      settoItems(newTodoItems);
 }

 let deleteItem = (task) =>{
  let newTodoItems = toItems.filter((n) => n.name !== task);
  settoItems(newTodoItems);
 }
 return (
    <todoItemContext.Provider value={{
      todoItems: toItems,
      addNewItem: addNewItem,
      deleteItem: deleteItem,
    }}>
      <center className="todo-container">
        <TodoHead></TodoHead><br/>
        <AddTodo ></AddTodo><br/>
        <TodoItems></TodoItems>
        <ErrorMessage></ErrorMessage>
      </center>
  </todoItemContext.Provider>
  );
}
export default App;
