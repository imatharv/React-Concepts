import React, { useState } from "react";

export default function CounterComponent(props) {
  const [counter, setCounter] = useState("1");
  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const increaseCounter = () => {
    if (counter <= 5) {
      setCounter(counter + 1);
    }
  };
  return (
    <React.Fragment>
      <div>
        <p>{props.render(counter, increaseCounter, decreaseCounter)}</p>
      </div>
    </React.Fragment>
  );
}
