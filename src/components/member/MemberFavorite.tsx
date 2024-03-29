import axios from "axios";
import { useEffect, useState } from "react";
import TrailsFavorite from "../Trails/TrailsFavorite";
import LoginFetchCookie from "../hook/LoginCookie";
import { MemberFavoriteInterface } from "../interface/MountripInterface";

function MemberFavorite() {
  const [favoriteList, setFavoriteList] = useState<MemberFavoriteInterface[]>(
    []
  );
  const getFavoriteApi = async (
    callback: (r: { sid: number; trail_name: string; status: number }[]) => void
  ) => {
    try {
      const res = await axios.get("http://localhost:3002/getlikeData", {
        params: { memberSid: Number(LoginFetchCookie("sid")) },
      });
      callback(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getFavoriteApi((r) => {
      setFavoriteList(r);
    });
  }, []);

  return (
    <div className="mountainCoupon">
      <h2>Coupon</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col">編號</th>
            <th className="col">名稱</th>
            <th className="col">狀態</th>
          </tr>
        </thead>
        <tbody>
          {favoriteList.map((v, i) => {
            return (
              <tr>
                <td>{v.sid}</td>
                <td>{v.trail_name}</td>
                <td>
                  <TrailsFavorite row={v.sid} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MemberFavorite;
