import React from "react";

function Header() {
  const clinet = "programmer";
  const title = {
    designer: "Design",
    programmer: "Programming",
  };

  return (
    <h2>
      {clinet === "designer" ? title.designer : title.programmer} is my life
    </h2>
  );
}

export default Header;
