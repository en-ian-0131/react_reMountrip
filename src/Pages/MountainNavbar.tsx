import { useContext } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { CartContext } from "../components/context/CartContext";

function MountainNavbar() {
  const { cartState } = useContext<any>(CartContext);
  console.log("length:", cartState.cartItem.length);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light mountainNavbar">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            MounTrip
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/login" className="nav-link active">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/member" className="nav-link">
                  member
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  Cart
                </Link>
              </li>
            </ul>
            <div className="rightIcons">
              <span>已加入購物車 : {cartState.cartItem.length}</span>
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
