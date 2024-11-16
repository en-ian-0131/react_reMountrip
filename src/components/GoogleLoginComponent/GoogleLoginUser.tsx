import { useEffect } from "react";
import { auth } from "../../fireBaseConfig/googleLoginConfig";
import { useNavigate } from "react-router-dom";

export default function GoogleLoginUser() {
  const { currentUser } = auth;
  const navigate = useNavigate();
  const validatephotoURLOfData = () => {
    return currentUser !== null && currentUser.photoURL !== null
      ? currentUser.photoURL
      : "";
  };

  // useEffect(() => {
  //   if (currentUser === null) {
  //     alert("還沒登入，請先登入喔~");
  //     navigate("/login")
  //   }
  // }, []);

  return (
    <>
      <h1>User Data</h1>
      <div>
        <img src={validatephotoURLOfData()} alt="" />
      </div>
      <div className="row">
        <label className="col-auto">使用者:</label>
        <span className="col-auto">
          {currentUser !== null && currentUser.displayName}
        </span>
      </div>
      <div className="row">
        <label className="col-auto">使用者email : </label>
        <span className="col-auto">
          {currentUser !== null && currentUser.email}
        </span>
      </div>
    </>
  );
}
