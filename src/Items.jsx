import { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { todoItemContext } from "./store/todo-item-store";

function Items({task, date}) {
  const {deleteItem}  = useContext(todoItemContext);
  return (
    <div className="row">
      <div className="col-6">{task}</div> 
      <div className="col-4">{date}</div>
      <div className="col-2">
        <button  
          type="button" 
          className="btn btn-danger"
          key={task}
          onClick={()=>deleteItem(task)}
          style={{width: "80px"}}
          ><RiDeleteBin6Line  />
          </button>
      </div>
    </div>
  );
}
export default Items;
