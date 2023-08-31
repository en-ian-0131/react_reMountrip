import { useState } from "react";

function TrailsProductCount() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <i
        className="fa-solid fa-minus"
        onClick={() => {
          if (count >= 1) {
            setCount((count) => count - 1);
          }
        }}
      ></i>
      <input
        type="text"
        value={count}
        onChange={(e) => {
          setCount(Number(e.target.value));
        }}
      />
      <i
        className="fa-solid fa-plus"
        onClick={() => {
          setCount((count) => count + 1);
        }}
      ></i>
    </div>
  );
}

export default TrailsProductCount;
