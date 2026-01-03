import { useState } from "react";

function ChangeText() {
  const [text, setText] = useState("Hello");

  const handleClick = () => {
    setText("Button Clicked!");
  };

  return (
    <div>
      <h2>{text}</h2>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default ChangeText;
