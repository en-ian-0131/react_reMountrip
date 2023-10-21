import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import TrailsProductCount from "../components/TrailsProductCount";
import { FetchData } from "../components/interface/MountripInterface";

function TrailsProducts() {
  const [data, setData] = useState<FetchData[]>([]);
  const getPoductsData = useCallback(async () => {
    try {
      const responseData = await axios.get(
        "http://localhost:3002/trails_Limit8"
      );
      setData(responseData.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getLikeApi = async (trail_name: string) => {
    try {
      const Like = await axios.get("http://localhost:3002/like", {
        params: { body: trail_name },
      });
      console.log("Like:", Like);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPoductsData();
  }, []);

  return (
    <>
      <h2>Products</h2>
      <div className="trailsProducts">
        {data.map((v) => {
          return (
            <div className="trailsProduct" key={v.sid}>
              <i
                className="fa-regular fa-heart heart"
                onClick={() => {
                  getLikeApi(v.trail_name);
                  console.log(v.trail_name);
                }}
              ></i>
              <i
                className="fa-regular fa-heart haveHeart"
                onClick={() => {
                  getLikeApi(v.trail_name);
                  console.log(v.trail_name);
                }}
              ></i>
              <img src={`/imgs/${v.trail_img}`} alt="" />
              <p className="tailsProduct_firstChild">{v.trail_name}</p>
              <div>
                <span>{v.geo_location_sid}</span>
                <span>{v.geo_location_town_sid}</span>
              </div>
              <p className="tailsProduct_secondChild">$ {v.price}</p>
              <div className="trailCount">
                <TrailsProductCount v={v} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TrailsProducts;
