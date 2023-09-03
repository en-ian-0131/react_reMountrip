import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { CartContext } from "../components/context/CartContext";

function MountainNavbar() {
  const { cartState } = useContext<any>(CartContext);
  const [check_li, setCheck_li] = useState("");

  const ul_Content: string[] = ["Login", "products", "member", "Cart"];

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light mountainNavbar">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            MounTrip
          </Link>
          <div
            className="collapse navbar-collapse mountainNavbar_ul"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {ul_Content.map((v, i) => {
                return (
                  <li
                    key={i}
                    className="nav-item"
                    onClick={() => {
                      setCheck_li(v);
                    }}
                  >
                    <Link
                      to={`/${v}`}
                      className={
                        check_li === v ? "nav-link li_active" : "nav-link"
                      }
                    >
                      {v}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="rightIcons">
              <span>已加入購物車 : {cartState.quantity}</span>
              <span> XXX 登入</span>
              <div className="rightIcons_img">
                <img src="/imgs/cat.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default MountainNavbar;
