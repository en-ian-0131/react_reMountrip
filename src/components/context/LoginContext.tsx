import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../interface/MountripInterface";

// export interface Init {
//   myAccount: string;
//   myPassword: string;
//   setMyAcount: React.Dispatch<React.SetStateAction<string>>;
//   setMyPassword: React.Dispatch<React.SetStateAction<string>>;
// }

const init: any = {}; //!

export const LoginContext = createContext(init);


export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [myAccount, setMyAccount] = useState<string>("");
  const [myPassword, setMyPassword] = useState<string>("");
  const [check_li, setCheck_li] = useState("MounTrip");
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
      console.log(r)
      // callback(r)
      setLoginResponse({
        admins: {
          account: r.admins.account,
          nickname: r.admins.nickname,
          sid: r.admins.sid,
        },
        body: {
          account: r.body.account,
          password: r.body.password,
        },
        error: r.error,
        message: r.message,
        success: r.success,
      });
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <LoginContext.Provider
      value={{
        myAccount,
        myPassword,
        setMyAccount,
        setMyPassword,
        handlSubmit,
        LoginResponse,
        setLoginResponse,
        check_li,
        setCheck_li
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
