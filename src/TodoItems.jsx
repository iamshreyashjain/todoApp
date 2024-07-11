import { useContext } from "react";
import { todoItemContext } from "./store/todo-item-store";

import Items from "./Items";

function TodoItems() {

  //both are correct
    //const contextObj = useContext(todoItemContext);
    //const todoItems = contextObj.todoItems;
  
const { todoItems } = useContext(todoItemContext);
//The line of code you provided is utilizing 
//the useContext hook in React to consume a
// context called todoItemContext and extract 
//the todoItems value from it. Here's how it works:
return (
    <>
    {todoItems.map((items, index) => (
        <div key={index}>
          <Items task={items.name} date={items.date}></Items>
        </div>
      ))}
    </>
  );
}
export default TodoItems;
