import { useRef } from "react";

function UseRefDemo() {
  let inputNameRef = useRef();

  function showNameHandler() {
    console.log(inputNameRef.current.value);
  }
  return (
    <>
      <span>Name</span>
      <input type="text" ref={inputNameRef} />
      <button onKeyUp={showNameHandler}>Show Name</button>
    </>
  );
}

export default UseRefDemo;
