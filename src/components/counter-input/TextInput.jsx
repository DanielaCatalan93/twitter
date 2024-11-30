import React from "react";
import { useState } from "react";

const TextInput = ({ sendTweet }) => {
  const [newTweet, setNewTweet] = useState("");

  const handleClick = () => {
    if (newTweet === "") {
      alert(`Debes escribir algo.`);
      return;
    }
    sendTweet(newTweet);
    setNewTweet("");
  };

  return (
    <>
      <div className="flex justify-center flex-col">
        <input
          className="border mx-24 pb-16 p-4 border-black rounded"
          type="text"
          placeholder="¿Qué estás pensando?"
          value={newTweet}
          onChange={(e) => setNewTweet(e.target.value)}
        />
        <button
          className="bg-blue-500 border-black border mt-2 mx-24"
          onClick={handleClick}
        >
          Enviar
        </button>
        <p>{newTweet}</p>
      </div>
    </>
  );
};

export default TextInput;
