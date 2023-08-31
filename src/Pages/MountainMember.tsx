import React from "react";

function MountainMember() {
  return (
    <div className="mountainMember">
      <h2>MountainMember</h2>
      <div>
        <section className="first_section">
          <div className="first_section_img">
            <img src="/imgs/cat.png" alt="" />
          </div>
          <span> XXX </span>

          <ul>
            <li className="active">會員</li>
            <li>優惠券</li>
            <li>成就</li>
            <li>待開發...</li>
          </ul>
        </section>
        <section className="second_seciton">
          <div>
            <div>
              <label htmlFor="">帳號 : </label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">姓式 : </label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">名字 : </label>
              <input type="text" />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="">性別 : </label>
              <input type="text" />
            </div>

            <div>
              <label htmlFor="">生日 : </label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">手機 : </label>
              <input type="text" />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="">出生地 : </label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">地址 : </label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">e-mail : </label>
              <input type="text" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MountainMember;
