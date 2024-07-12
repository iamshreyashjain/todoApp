import { useContext, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { todoItemContext } from "./store/todo-item-store";
import { BiDisc } from "react-icons/bi";


function AddTodo() {
  const { addNewItem, todoItems } = useContext(todoItemContext);
  const [task, setTask] = useState("");
  const [date, setDate] = useState(Date.now());
  const [id, setid] = useState(1)

  const onNewTask = (e) => {
    setTask(e.target.value);
  }

  const onNewDate = (e) => {
    setDate(e.target.value);
  }

  const handleAddButtonClick = (event) => {
    console.log(id)
    event.preventDefault();

    if (todoItems.some(item => item.name === task) && todoItems.some(item => item.date === date)) {
      alert("This task already exists.");
      return;
    }

    if (task === "" && date === "") {
      alert('Please add a task and date');
    } else if (task === "") {
      alert('Please add a task');
    } else if (date === "") {
      alert('Please add a date');
    } else {
      addNewItem(task, date, id);
      setTask("");
      setDate("");
      setid(()=>id+1)
    }
  }

  return (
    <>
    <div className="d-flex flex col-lg-10">
    <h2 className="text-warning col-lg-4 col-4">Task</h2> 
      <h2 className="text-warning col-lg-4 col-4">Date</h2>
      <div className="col-lg-4 col-4"></div>
    </div>
      
    <form className="d-flex flex-row col-lg-10 justify-content-around rounded border-bottom border-4 border-warning   justify-content-around  shadow py-2 mx-3" onSubmit={handleAddButtonClick} style={{backgroundColor: 'white'}}>
      <div className="col-lg-4 col-5">
        <input type="text" 
               value={task} 
               onChange={onNewTask}
               className="col-lg-6 col-10  border border-2 rounded border-dark-subtle"
               style={{height :'33px', outline: 'none', border:'none'}}>
        </input>
      </div>
      <div className="col-lg-4  col-5">
        <input type="date" 
               value={date}
               onChange={onNewDate}
               className="col-lg-6 col-10  rounded border border-2 border-dark-subtle "
               style={{minHeight:'30px', maxHeight :'30px', outline: 'none'}}>
        </input>
      </div>
      <div className="col-lg-4 col-2">
        <button type="submit" 
                className="col-lg-4  btn btn-success" style={{height: '33px'}}><IoAdd size={20} className="mb-5" />
        </button>
      </div>
    </form>
    </>
  );
}

export default AddTodo;
