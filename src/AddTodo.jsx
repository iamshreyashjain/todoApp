import { useContext, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { todoItemContext } from "./store/todo-item-store";

function AddTodo() {
  const {addNewItem} = useContext(todoItemContext);
  
  
  let [task, setTask] = useState("");
  let [date, setDate] = useState("");

  let onNewTask = (e) => {
    setTask(e.target.value);
  }
  let onNewDate = (e) => {
    setDate(e.target.value);
  }
  
  let handleAddButtonClick = (event) =>{
    if(task!="" && date != ""){
      addNewItem(task, date);}
    else{
      alert('Empty');
    }
    event.preventDefault();
    setTask("")
    setDate("")
  }
  return (
    <form className="row" onSubmit={handleAddButtonClick} >
      <div className="col-6">
          <input type="text" 
            value ={task} 
            onChange = {onNewTask}>
          </input>
        </div>
        <div className="col-4">
          <input type="date" 
            value={date}
            onChange = {onNewDate}>
          </input>
        </div>
        <div className="col-2">
        <button type="submit" 
                className="btn btn-success"
                style={{width: "80px"}}><IoAdd />
        </button>
      </div>
    </form>
  );
}
export default AddTodo;
