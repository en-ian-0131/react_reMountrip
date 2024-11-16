import { Link, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../../fireBaseConfig/googleLoginConfig";
import { signOut } from "@firebase/auth";
import { useCallback } from "react";

export default function GoogleLoginMain() {
  const { currentUser } = auth;
  const navigate = useNavigate();
  const TaipeiOfTimeZone = (time: string | undefined) => {
    if (time !== undefined)
      return new Date(time).toLocaleString("zh-TW", {
        timeZone: "Asia/Taipei",
      });
  };

  const LogoutClick = useCallback(async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("signOut error", error);
    }
  }, [auth]);

  const UserClickOfSigninNotYet = () => {
    if (currentUser === null) {
      alert("還沒登入，請先登入喔~");
      navigate("/login");
    }
  };

  return (
    <div className="container">
      <nav
        className="navbar navbar-expand-lg bg-light"
        style={
          {
            "--bs-light-rgb": "240, 240, 240",
          } as React.CSSProperties
        }
      >
        <div className="container">
          <div className="w-100 d-flex justify-content-between" id="navbarNav">
            <div className="col-auto">
              <div className="d-flex gap-2">
                <div className="col-auto">
                  <Link
                    className="nav-link btn btn-primary px-3 py-2 text-white"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </div>
                <div className="col-auto">
                  {currentUser === null ? (
                    <button
                      className="nav-link btn btn-primary px-3 py-2 text-white"
                      onClick={UserClickOfSigninNotYet}
                    >
                      User
                    </button>
                  ) : (
                    <>
                      <Link
                        className="nav-link btn btn-primary px-3 py-2 text-white"
                        to="/user"
                      >
                        User
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="col-auto row">
              {currentUser !== null && (
                <div className="col-auto row align-items-center">
                  <label className="col-auto">上次登入時間:</label>
                  <span className="col-auto">
                    {TaipeiOfTimeZone(currentUser.metadata.lastSignInTime)}
                  </span>
                </div>
              )}
              {currentUser !== null ? (
                <div className="col-auto">
                  <button
                    className="btn btn-primary px-3 py-2"
                    onClick={LogoutClick}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="col-auto">
                  <Link
                    className="nav-link btn btn-primary px-3 py-2 text-white"
                    to="/login"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
