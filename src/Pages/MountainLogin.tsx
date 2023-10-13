import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../components/context/LoginContext";
import { useNavigate } from "react-router-dom";
import { LoginData } from "../components/interface/MountripInterface";

function MountainLogin() {
  const { setCheck_li }: any = useContext(LoginContext);
  const [myAccount, setMyAccount] = useState<string>("");
  const [myPassword, setMyPassword] = useState<string>("");
  const [LoginResponse, setLoginResponse] = useState<LoginData>({
    admins: {
      account: "",
      nickname: "",
      sid: 0,
    },
    body: {
      account: "",
      password: "",
    },
    error: 0,
    message: "",
    success: false,
  });
  const navigate = useNavigate();

  const handlSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const body = {
      account: myAccount,
      password: myPassword,
    };

    const jsonBody = JSON.stringify(body);

    try {
      const res = await fetch("http://localhost:3002/login", {
        method: "POST",
        body: jsonBody,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const r = await res.json();
      console.log(r);
      setLoginResponse(r)
      localStorage.setItem("account", r.admins.account);
      localStorage.setItem("nickname", r.admins.nickname);
      localStorage.setItem("success", r.success);
      setTimeout(() => {
        navigate("/products");
        setCheck_li("products");
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {LoginResponse.success ? (
        <h1>登入成功~</h1>
      ) : (
        <div className="mountainLogin">
          <h2 className="mountainLogin_h2">Login</h2>
          <form
            method="post"
            className="mountainLoginForm"
            onSubmit={handlSubmit}
          >
            <div>
              <label>帳號 :</label>
              <input
                type="text"
                value={myAccount}
                onChange={(e) => {
                  setMyAccount(e.target.value);
                }}
              />
            </div>
            <div>
              <label>密碼 :</label>
              <input
                type="text"
                value={myPassword}
                onChange={(e) => {
                  setMyPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <button>登入</button>
              <button>註冊</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default MountainLogin;
