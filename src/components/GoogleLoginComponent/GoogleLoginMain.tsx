import { Link, Outlet } from "react-router-dom";

export default function GoogleLoginMain() {
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
          <div
            className="w-100 d-flex justify-content-between"
            id="navbarNav"
          >
            <div className="col-auto">
              <div className="d-flex gap-2">
                <div className="col-auto btn btn-primary">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </div>
                <div className="col-auto btn btn-primary">
                  <Link className="nav-link" to="/user">
                    User
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="btn btn-primary">
                <Link className="nav-link" to="#">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
