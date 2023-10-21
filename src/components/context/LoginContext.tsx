import { ReactNode, createContext, useState } from "react";
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
  const [check_li, setCheck_li] = useState("MounTrip");

  return (
    <LoginContext.Provider
      value={{
        check_li,
        setCheck_li,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
