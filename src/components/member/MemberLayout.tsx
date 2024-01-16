import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

function MemberLayout() {
  const [t0, setT0] = useState<number>(0);
  const navigate = useNavigate();
  const sectionClick: React.MutableRefObject<string> = useRef("會員");
  const { loginUserData }: any = useContext(LoginContext);

  const firstSection = [
    { key: "coupon", name: "優惠券" },
    { key: "favorite", name: "我的最愛" },
    { key: "history", name: "歷史訂單" },
    { key: "achieve", name: "成就" },
  ];

  useEffect(() => {
    navigate("/member");
  }, []);

  return (
    <div className="mountainMember">
      <h2>Member</h2>
      <div>
        <section className="first_section">
          <div className="first_section_img">
            <img src="/imgs/cat.png" alt="" />
          </div>
          <span>
            {loginUserData.account !== "" ? loginUserData.account : ""}
          </span>

          <ul>
            <li
              className={
                sectionClick.current === "會員"
                  ? "active cousorPoint"
                  : "cousorPoint"
              }
              onClick={() => {
                navigate("/member");
                sectionClick.current = "會員";
                setT0(t0 + 1);
              }}
            >
              會員
            </li>
            {firstSection.map((v, i) => {
              return (
                <li
                  key={`${v}+${i}`}
                  className={
                    v.name === sectionClick.current
                      ? "active cousorPoint"
                      : "cousorPoint"
                  }
                  onClick={() => {
                    sectionClick.current = v.name;
                    navigate(`/member/${v.key}`);
                    setT0(t0 + 1);
                  }}
                >
                  {v.name}
                </li>
              );
            })}
          </ul>
        </section>
        <Outlet />
      </div>
    </div>
  );
}

export default MemberLayout;
