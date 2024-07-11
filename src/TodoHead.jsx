import { GrCompliance } from "react-icons/gr";
function TodoHead() {
  return (
    <div className="flex flex-row align-items-center">
      <h1 className="">Todo App</h1>
      <GrCompliance size={35} className="mb-3" color='brown'/> 
    </div>
  );
}
export default TodoHead;
