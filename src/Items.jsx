import { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { todoItemContext } from "./store/todo-item-store";

function Items({task, date, id}) {
  const {deleteItem}  = useContext(todoItemContext);
  return (
    <div className="row m-3">
      <div className="col-5">{task}</div> 
      <div className="col-5">{date}</div>
      <div className="col-2">
        <button  
          type="button" 
          className="btn btn-danger"
          key={id}
          onClick={()=>deleteItem(id)}
          ><RiDeleteBin6Line  />
          </button>
      </div>
    </div>
  );
}
export default Items;
