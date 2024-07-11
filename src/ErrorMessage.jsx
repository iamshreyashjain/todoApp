import { useContext } from "react";
import { todoItemContext } from "./store/todo-item-store";

function ErrorMessage(){
    const {todoItems} = useContext(todoItemContext)
    return(
        <>
            {todoItems.length === 0 && <h1>Enjoy your day</h1>}
        </>
    )
}
export default ErrorMessage;