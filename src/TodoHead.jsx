import { GrCompliance } from "react-icons/gr";

function TodoHead() {
  return (
    <>
      <div className="d-flex flex-row align-items-center justify-content-center mt-3 border-bottom border-2 mx-3 border-danger">
        <h1 className="text-center">TODO APP</h1>
        <GrCompliance 
        className="shadow shadow-2"
          size={40} 
          style={{ 
            background: "radial-gradient(circle, rgba(244,0,0,0) 0%, rgba(255,255,255,1) 40%, rgba(244,0,1) 100%)",
            borderRadius :"50%",
            padding: '0px 10px',
            color :"brown"
          }} 
        /> 
      </div>
    </>
  );
}

export default TodoHead;
