import { ReactNode, createContext, useState } from "react";
import { IMemberUserData } from "../interface/MountripInterface";

// export interface Init {
//   myAccount: string;
//   myPassword: string;
//   setMyAcount: React.Dispatch<React.SetStateAction<string>>;
//   setMyPassword: React.Dispatch<React.SetStateAction<string>>;
// }

const init: any = {}; //!

export const LoginContext = createContext(init);

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [check_li, setCheck_li] = useState("MounTrip");
  const [loginUserData, setLoginUserData] = useState<IMemberUserData>({
    sid: 0,
    success: false,
    account: "",
    nickName: "",
  });

  return (
    <LoginContext.Provider
      value={{
        check_li,
        setCheck_li,
        loginUserData,
        setLoginUserData,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
