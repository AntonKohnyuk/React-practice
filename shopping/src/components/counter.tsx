import { useState } from "react";

interface CounterProps {
  id: number;
  value: number;
  name: string;
  onDelete(id: number): void;
  onIncrement(id: number): void;
  onDecrement(id: number): void;
}

function Counter({
  value,
  name,
  id,
  onDelete,
  onIncrement,
  onDecrement,
}: CounterProps) {
  const formCountValue = () => (value ? value : "Empty");
  const getBageClasses = () => {
    let classes = "badge m-2";
    classes += value ? " bg-primary" : " bg-warning";
    return classes;
  };

  const handleIncrement = () => {
    onIncrement(id);
  };
  const handleDecrement = () => {
    onDecrement(id);
  };

  return (
    <div>
      <span>{name}</span>
      <span className={getBageClasses()}>{formCountValue()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}

export default Counter;
