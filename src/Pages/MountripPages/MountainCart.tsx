import { useContext, useEffect } from "react";
import { CartContext } from "../../components/MountripComponent/context/CartContext";
import {
  CartCheckTotalPrice,
  CartTotalData,
} from "../../components/MountripComponent/interface/MountripInterface";

function MountainCart() {
  const { cartState, plusCount, minusCount, removeItem, checkedItem } =
    useContext<any>(CartContext);
  const { cartItem }: { cartItem: CartCheckTotalPrice[] } = cartState;

  // useEffect(() => {
  //   const totalPrice = () => {
  //     return cartItem
  //       .filter((row) => row.checked === true)
  //       .map((row) => row.price * row.count);

  //     // .reduce((a, b) => a + b, 0);
  //   };
  //   console.log("123:", totalPrice());
  // }, [cartItem]);

  return (
    <div className="mountainCart">
      <h2>Shopping Cart</h2>
      <div className="mountainCart_sections">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    // console.log("123:", e.target.checked);
                  }}
                />
              </th>
              <th>名稱</th>
              <th>單價</th>
              <th>數量</th>
              <th>總計</th>
              <th>
                <i className="fa-solid fa-trash-can"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItem.map((row, index) => {
              return (
                <tr
                  key={`${row.trail_name}-${row.trail_img}-${row.sid}-${index}`}
                >
                  <td className="table_input_checkbox">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        checkedItem(e.target.checked ? row.sid : 0);
                      }}
                    />
                  </td>
                  <td>{row.trail_name}</td>
                  <td>$ {row.price}</td>
                  <td className="tableCount">
                    <i
                      className="fa-solid fa-minus"
                      onClick={() => {
                        minusCount(row.sid);
                      }}
                    ></i>
                    <input type="text" value={row.count} onChange={(e) => {}} />
                    <i
                      className="fa-solid fa-plus"
                      onClick={() => {
                        plusCount(row.sid);
                      }}
                    ></i>
                  </td>
                  <td>$ {row.count * row.price}</td>
                  <td>
                    <i
                      className="fa-solid fa-trash-can"
                      onClick={() => {
                        removeItem(row.sid);
                      }}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <section>
          <p>總金額: $ {0}</p>
          <div className="mountainCart_coupon">
            <span>優惠券 :</span>
            <input type="text" />
          </div>
          <p>折價後 : $1000</p>
        </section>
      </div>
    </div>
  );
}

export default MountainCart;
