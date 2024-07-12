import { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { todoItemContext } from "./store/todo-item-store";
import { BiDisc } from "react-icons/bi";


function Items({task, date, id}) {
  const {deleteItem}  = useContext(todoItemContext);
  return (
    <div className="d-flex flex col-lg-10 mx-3 shadow  border-bottom  border-4 border-warning rounded  p-2 gap-2 mt-4" style={{backgroundColor: "white"}}>
      <div className="col-lg-4 col-5 text-break" >{task}</div> 
      <div className="col-lg-4 col-5 ">{date}</div>
      <div className="col-lg-4 col-1">
        <button  
          style={{height: '30px'}}
          type="button" 
          className="btn btn-danger  col-lg-4"
          key={id}
          onClick={()=>deleteItem(id)}>
            <RiDeleteBin6Line className="mb-4" />
          </button>
      </div>
    </div>
  );
}
export default Items;
