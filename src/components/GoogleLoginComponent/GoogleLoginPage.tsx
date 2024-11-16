import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../fireBaseConfig/googleLoginConfig";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export default function GoogleLoginPage() {
  const navigative = useNavigate();

  const LoginClick = useCallback(async () => {
    const result = await signInWithPopup(auth, googleProvider);
    navigative("/");
  }, [auth, googleProvider]);

  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="button" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="mt-3">
        <h5 className="fw-bold">請選擇其他登入方式</h5>
        <div className="row mt-3">
          <div className="col-auto">
            <button className="btn btn-primary" onClick={LoginClick}>
              Google
            </button>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary">FaceBook</button>
          </div>
        </div>
      </div>
    </>
  );
}
