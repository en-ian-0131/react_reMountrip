import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";

interface FetchData {
  sid: number;
  coupon_name: string;
  coupon_code: string;
  coupon_rate: number;
  start_date_coup: string;
  end_date_coup: string;
  coupon_status: number;
}

function MemberCoupon() {
  const [myCoupon, setMyCoupon] = useState<FetchData[]>([]);

  const getCounponData = async () => {
    try {
      const res = await axios("http://localhost:3002/coupon_limit5");
      const data = res.data;
      setMyCoupon(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCounponData();
  }, []);

  const transFormName = (coupon_status: number) => {
    switch (coupon_status) {
      case 1:
        return <td className="notYetUsed">未使用</td>;
      case 2:
        return <td className="haveUsed">已使用</td>;
      case 3:
        return <td className="expirationSoon">快過期</td>;
      default:
        return <td className="expired">已過期</td>;
    }
  };
  const transFormTimestamp = (timestamp: string) => {
    return timestamp.slice(0, 10);
  };

  return (
    <div className="mountainCoupon">
      <h2>Coupon</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>代號</th>
            <th className="col-4">名稱</th>
            <th>折數</th>
            <th>使用時間</th>
            <th className="col-2">狀態</th>
          </tr>
        </thead>
        <tbody>
          {myCoupon.map((v, i) => {
            return (
              <tr key={`${v}+${i}`}>
                <td>{v.coupon_code}</td>
                <td>{v.coupon_name}</td>
                <td>{v.coupon_rate}折</td>
                <td>
                  {`${transFormTimestamp(
                    v.start_date_coup
                  )} - ${transFormTimestamp(v.end_date_coup)}`}
                </td>
                {transFormName(v.coupon_status)}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MemberCoupon;
