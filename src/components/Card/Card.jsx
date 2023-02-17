import React from "react";
import "./Card.css";
import { motion as m } from "framer-motion";
function Card({ title, description }) {
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen(!open);
  return (
    <m.div
      //   style={{ borderRadius: `1rem` }}
      transition={{ layout: { duration: 1 } }}
      className="card"
      //   layout="size"
    >
      <m.h1 layout="position" onClick={toggle}>
        {title}
      </m.h1>
      {open && (
        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.68 }}
        >
          {description}
        </m.p>
      )}
    </m.div>
  );
}

export default Card;
