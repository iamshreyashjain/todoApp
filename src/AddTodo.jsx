import { useContext, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { todoItemContext } from "./store/todo-item-store";

function AddTodo() {
  const { addNewItem, todoItems } = useContext(todoItemContext);
  const [task, setTask] = useState("");
  const [date, setDate] = useState('');
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
    <form className="d-flex flex-row col-lg-12 justify-content-around mx-3" onSubmit={handleAddButtonClick}>
      <div className="col-lg-5 col-4">
        <input type="text" 
               value={task} 
               onChange={onNewTask}
               className="col-lg-6 col-12 rounded border border-2 border-dark-subtle"
               style={{height:'30px'}}>
        </input>
      </div>
      <div className="col-lg-5  col-4">
        <input type="date" 
              placeholder="Add Date"
               value={date}
               onChange={onNewDate}
               className="col-lg-6 col-12 rounded border border-2 border-dark-subtle align-self-baseline"
               style={{height:'30px'}}>
        </input>
      </div>
      <div className="col-lg-2">
        <button type="submit" 
                className="col-lg-8  col-12 btn btn-success" style={{height: '30px'}}><IoAdd size={20} className="mb-5" />
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
