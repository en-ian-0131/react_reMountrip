import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { CartContext } from "../../components/MountripComponent/context/CartContext";
import { LoginContext } from "../../components/MountripComponent/context/LoginContext";
import { User } from "./MountainLogin";

function MountainNavbar() {
  const { cartState } = useContext<any>(CartContext);
  const { loginUserData, check_li, setCheck_li, setLoginUserData } =
    useContext(LoginContext);
  const navigate = useNavigate();
  const ul_Content: string[] = [
    "MounTrip",
    "Login",
    "products",
    "member",
    "Cart",
    "Test",
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light mountainNavbar">
        <div className="container-fluid">
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
                      if (
                        v === "MounTrip" ||
                        v === "products" ||
                        v === "Login"
                      ) {
                        setCheck_li(v);
                      } else {
                        if (User()) {
                          setCheck_li(v);
                        } else {
                          alert("請先登入~");
                          navigate("/Login");
                          setCheck_li("Login");
                        }
                      }
                    }}
                  >
                    <Link
                      to={v === "MounTrip" ? "/" : `/${v}`}
                      className={
                        check_li === v ? "nav-link li_active" : "nav-link"
                      }
                    >
                      {User() && v === "Login" ? "" : v}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="rightIcons">
              <div className="cartItems">
                <ShoppingCartIcon fontSize="large" />
                <div>{cartState.cartItem.length}</div>
              </div>
              <span className="ms-4">
                {`${
                  loginUserData.nickName !== "" ? loginUserData.nickName : ""
                } ${User() !== undefined ? User() : ""}`}
              </span>
              {User() !== undefined ? (
                <button
                  onClick={() => {
                    navigate("/");
                    setCheck_li("MounTrip");
                    document.cookie = `sid=; expires=${new Date(0)}`;
                    document.cookie = `account=; expires=${new Date(0)}`;
                    document.cookie = `nickname=; expires=${new Date(0)}`;
                    document.cookie = `success=; expires=${new Date(0)}`;
                    setLoginUserData({
                      sid: 0,
                      success: false,
                      account: "",
                      nickName: "",
                    });
                  }}
                >
                  登出
                </button>
              ) : (
                <button
                  onClick={() => {
                    navigate("/Login");
                  }}
                >
                  登入
                </button>
              )}
              <div className="rightIcons_img ms-4">
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
