import { useState, useCallback, useEffect, Fragment } from "react";
import axios from "axios";
import { MemberDetail } from "../components/interface/MountripInterface";


function MountainMember() {
  const [memberData, setMemberData] = useState([]);

  const getMemberData = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:3002/member_Limit1");
      setMemberData(res.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  
  useEffect(() => {
    getMemberData();
  }, []);
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
                  <label htmlFor="">性別 : {row.gender}</label>
                  {/* <input type="text" /> */}
                </div>

                <div>
                  <label htmlFor="">生日 : {row.birthday}</label>
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
