import React from "react";
import "./styles.css";

export default function App() {
  return HelloWorldArticle();
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Ciao a tutti</h1>
      <p>React for you!</p>
    </article>
  );
}
