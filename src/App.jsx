import React from "react";
import "./App.css";
import Card from "./components/Card/Card";
function App() {
  const props = {
    title: "Card Title",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
  expedita exercitationem pariatur assumenda veritatis accusamus dolorem
  eius et qui odio.`,
  };
  return (
    <section className="container">
      <Card {...props} />
    </section>
  );
}

export default App;
