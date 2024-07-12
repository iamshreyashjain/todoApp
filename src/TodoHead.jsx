import { GrCompliance } from "react-icons/gr";

function TodoHead() {
  return (
    <>
      <div className="d-flex flex-row align-items-center col-lg-10 justify-content-center mt-3  mx-5 border-danger border-bottom border-top border-2">
        <h1 className="text-center">Todo App</h1>
        <GrCompliance 
        color="brown"
          size={40} 
        /> 
      </div>
    </>
  );
}

export default TodoHead;
