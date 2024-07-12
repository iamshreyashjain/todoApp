import { GrCompliance } from "react-icons/gr";

function TodoHead() {
  return (
    <>
      <div className="d-flex flex-row align-items-center justify-content-center mt-3">
        <h1 className="text-center">Todo App</h1>
        <GrCompliance 
        className="shadow shadow-2"
          size={60} 
          style={{ 
            background: "radial-gradient(circle, rgba(244,0,0,0) 0%, rgba(255,255,255,1) 40%, rgba(244,0,1) 100%)",
            borderRadius :"50%",
            padding: '0px 10px',
            color :"brown"
          }} 
        /> 
      </div>
      <hr className="w-50 h-40 border border-1 border-dark"/>
    </>
  );
}

export default TodoHead;
