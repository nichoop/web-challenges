import React from "react";
import "./styles.css";
import { useState } from "react";

let count = 1;

function setCount(broccoli) {
  count = broccoli;
}

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

// import { useState } from "react";

// function SocialMediaPost() {
//   const [liked, setLiked] = useState(false);

//   function toggleLiked() {
//     setLiked(!liked);
//   }

//   return (
//     <article>
//       <p>Liked: {liked ? "Yes" : "No"}</p>
//       <button type="button" onClick={toggleLiked}>
//         {liked ? "Remove like" : "Add like"}
//       </button>
//     </article>
