import { useState } from "react";
import Counter from "./counter";

function CountersList() {
  const initialState = [
    { id: 0, value: 1, name: "dog" },
    { id: 1, value: 5, name: "cat" },
    { id: 2, value: 0, name: "rat" },
    { id: 3, value: 1, name: "dog" },
    { id: 4, value: 9, name: "dog" },
  ];

  const [countersList, setCountersList] = useState(initialState);

  const handleDelete = (id: number) => {
    setCountersList([...countersList].filter((e) => e.id !== id));
  };

  const handleReset = () => {
    setCountersList(initialState);
  };

  const handleIncrement = (id: number) => {
    const newCountersList = [...countersList];
    newCountersList[countersList.findIndex((e) => e.id === id)].value++;
    setCountersList(newCountersList);
  };

  const handleDecrement = (id: number) => {
    const newCountersList = [...countersList];
    newCountersList[countersList.findIndex((e) => e.id === id)].value--;
    setCountersList(newCountersList);
  };

  return (
    <>
      {countersList.map((e) => (
        <Counter
          key={e.id}
          {...e}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Reset
      </button>
    </>
  );
}

export default CountersList;
