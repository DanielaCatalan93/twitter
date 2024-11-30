import React from "react";
import { useState } from "react";

const Counter = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h3>Total: {contador}</h3>
      <button
        className="border bg-red-200 m-2 p-2"
        onClick={() => setContador(contador + 1)}
      >
        Incrementar
      </button>
      <button
        className="border bg-red-200 m-2 p-2"
        onClick={() => setContador(contador - 1)}
      >
        Restar
      </button>
    </div>
  );
};

export default Counter;
