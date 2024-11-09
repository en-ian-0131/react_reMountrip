import { useState, useContext } from "react";
import { CartContext } from "./context/CartContext";
import { FetchData } from "./interface/MountripInterface";

function TrailsProductCount({ v }: { v: FetchData }) {
  const [count, setCount] = useState(1);
  const { addItem } = useContext<any>(CartContext);
  return (
    <>
      <i
        className="fa-solid fa-minus"
        onClick={() => {
          if (count >= 2) {
            setCount(count - 1);
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
          setCount(count + 1);
        }}
      ></i>

      <button
        onClick={() => {
          addItem(v, count);
          alert(`${v.trail_name} 已加入購物車`);
        }}
      >
        加入購物車
      </button>
    </>
  );
}

export default TrailsProductCount;
