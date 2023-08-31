import { useState } from "react";

function MountainLogin() {
  const [myAccount, setMyAccount] = useState<string>("");
  const [myPasword, setMyPassword] = useState<string>("");

  const handlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("321:", {
      account: myAccount,
      password: myPasword,
    });
  };

  return (
    <>
      <div className="mountainLogin">
        <h2 className="mountainLogin_h2">登入頁面</h2>
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
              value={myPasword}
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
    </>
  );
}

export default MountainLogin;
