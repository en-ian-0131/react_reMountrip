import { useState, useCallback, useEffect, Fragment, useContext } from "react";
import axios from "axios";
import { MemberDetail } from "../components/interface/MountripInterface";
import { LoginContext } from "../components/context/LoginContext";

function MountainMember() {
  const [memberData, setMemberData] = useState([]);
  const { loginUserData } = useContext(LoginContext);

  const getMemberData = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:3002/member", {
        params: {
          account: loginUserData.account,
        },
      });
      setMemberData(res.data);
    } catch (err) {
      console.log(err);
    }
  }, [loginUserData.account]);

  const transformSex = (type: string) => {
    switch (type) {
      case "male":
        return "男";
      case "female":
        return "女";
      default:
        return "";
    }
  };

  const transformDate = (date: string) => {
    return date.slice(0, 10);
  };

  useEffect(() => {
    if (loginUserData.account !== "") getMemberData();
  }, [loginUserData.account]);

  return (
    <>
      <section className="second_seciton">
        {memberData.map((row: MemberDetail, i) => {
          return (
            <Fragment key={`${i}+${row.email}`}>
              <div>
                <div>
                  <label htmlFor="">帳號 : {row.account}</label>
                  {/* <input type="text" /> */}
                </div>
                <div>
                  <label htmlFor="">姓式 : {row.lastname}</label>
                  {/* <input type="text" /> */}
                </div>
                <div>
                  <label htmlFor="">名字 : {row.firstname}</label>
                  {/* <input type="text" /> */}
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="">性別 : {transformSex(row.gender)}</label>
                  {/* <input type="text" /> */}
                </div>

                <div>
                  <label htmlFor="">生日 : {transformDate(row.birthday)}</label>
                  {/* <input type="text" /> */}
                </div>
                <div>
                  <label htmlFor="">手機 : {row.mobile}</label>
                  {/* <input type="text" /> */}
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="">出生地 : {row.city}</label>
                  {/* <input type="text" /> */}
                </div>
                <div>
                  <label htmlFor="">地址 : {row.address}</label>
                  {/* <input type="text" /> */}
                </div>
                <div>
                  <label htmlFor="">e-mail : {row.email}</label>
                  {/* <input type="text" /> */}
                </div>
              </div>
            </Fragment>
          );
        })}
      </section>
    </>
  );
}

export default MountainMember;
