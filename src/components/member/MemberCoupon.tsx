import axios from "axios";
import React, { useEffect, useState } from "react";
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
      const res = await axios("http://localhost:3002/coupon_limit1");
      const data = res.data;
      setMyCoupon(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCounponData();
  }, []);

  const transFormName: (coupon_status: number) => React.ReactNode = (
    coupon_status
  ) => {
    switch (coupon_status) {
      case 1:
        return "未使用";
      case 2:
        return "已使用";
      case 3:
        return "快過期";
      default:
        return "已過期";
    }
  };
  const transFormTimestamp: (timestamp: string) => React.ReactNode = (
    timestamp
  ) => {
    return moment(parseInt(timestamp)).format("YYYY-MM-DD");
  };

  return (
    <div className="mountainCoupon">
      <h2>Coupon</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>代號</th>
            <th>名稱</th>
            <th>折數</th>
            <th>使用時間</th>
            <th>狀態</th>
          </tr>
        </thead>
        <tbody>
          {myCoupon.map((v, i) => {
            return (
              <tr>
                <td>{v.coupon_code}</td>
                <td>{v.coupon_name}</td>
                <td>{v.coupon_rate}折</td>
                <td>
                  {v.start_date_coup} -{v.end_date_coup}
                </td>
                <td>{transFormName(v.coupon_status)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MemberCoupon;
