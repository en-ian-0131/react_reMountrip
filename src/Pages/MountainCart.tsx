import { useState } from "react";

function MountainCart() {
  const [count, setCount] = useState(0);
  return (
    <div className="mountainCart">
      <h2>MountainCart</h2>
      <div className="mountainCart_sections">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>名稱</th>
              <th>價格</th>
              <th>數量</th>
              <th>
                <i className="fa-solid fa-trash-can"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table_input_checkbox">
                <input type="checkbox" />
              </td>
              <td>司瑪庫斯</td>
              <td>$ 699</td>
              <td className="tableCount">
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
              </td>
              <td>
                <i className="fa-solid fa-trash-can"></i>
              </td>
            </tr>
          </tbody>
        </table>
        <section>
          <p>總金額: $10000</p>
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
