import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import TrailsProductCount from "../../components/MountripComponent/TrailsProductCount";
import { FetchData } from "../../components/MountripComponent/interface/MountripInterface";
import TrailsFavorite from "../../components/MountripComponent/Trails/TrailsFavorite";

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

  useEffect(() => {
    getPoductsData();
  }, []);

  return (
    <>
      <h2>Products</h2>
      <div className="trailsProducts">
        {data.map((v, index) => {
          return (
            <div className="trailsProduct" key={`${v.sid}-${index}`}>
              <TrailsFavorite row={v.sid} />
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
