import React from "react";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const TwitterCard = ({ author, content }) => {
  const [liked, setLiked] = useState(false);

  const toggle = () => {
    setLiked(!liked);
  };

  return (
    <div className="flex justify-between border p-4 rounder m-3">
      <div>
        <h3 className="font-bold">{author}</h3>
        <p>{content}</p>
      </div>
      <div>
        <button onClick={toggle}>{liked ? <FaRegHeart /> : <FaHeart />}</button>
      </div>
    </div>
  );
};

export default TwitterCard;
