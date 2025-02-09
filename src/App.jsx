import TodoHead from "./TodoHead";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";
import ErrorMessage from "./ErrorMessage";
import { useState } from "react";
import { todoItemContext } from "./store/todo-item-store";

function App() {
   let initialtodoItems = []

let [toItems, settoItems] = useState(initialtodoItems);

 let addNewItem = (name, date, id)=>{
      let newTodoItems =  [...toItems, {name: name, date: date, id: id}];
      settoItems(newTodoItems);
 }

 let deleteItem = (id) =>{
  let newTodoItems = toItems.filter((n) => n.id !== id);
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
