import { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { todoItemContext } from "./store/todo-item-store";

function Items({task, date, id}) {
  const {deleteItem}  = useContext(todoItemContext);
  return (
    <div className="d-flex flex col-lg-12 m-3">
      <div className="col-lg-5 col-5 ">{task}</div> 
      <div className="col-lg-5 col-5">{date}</div>
      <div className="col-lg-2 col-2">
        <button  
          style={{height: '30px'}}
          type="button" 
          className="btn btn-danger col-lg-8"
          key={id}
          onClick={()=>deleteItem(id)}
          ><RiDeleteBin6Line className="mb-2" />
          </button>
      </div>
    </div>
  );
}
export default Items;
