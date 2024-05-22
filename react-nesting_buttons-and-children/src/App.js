import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button> Salute </Button>
      <Button> Mario</Button>
      <Button> Latte </Button>
      <Button> Pane</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
