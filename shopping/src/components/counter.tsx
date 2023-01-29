import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const formCount = () => (count ? count : "Empty");
  let classes = "badge m-2";
  classes += count ? " bg-primary" : " bg-warning";
  return (
    <>
      <span className={classes}>{formCount()}</span>
      <button className="btn btn-primary btn-sm m-2">+</button>
    </>
  );
}

export default Counter;
