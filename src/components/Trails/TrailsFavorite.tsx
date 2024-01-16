import axios from "axios";
import { useEffect, useState } from "react";
import { FetchData } from "../interface/MountripInterface";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function TrailsFavorite(props: { row: number }) {
  const { row } = props;
  const [controlLike, setControlLike] = useState<number>(0);
  const [forFavoriteData, setForFavoriteData] = useState<{
    memberSid: number;
    trailSid: number;
    favoriteState: number;
  }>({
    memberSid: Number(localStorage.getItem("sid")),
    trailSid: 0,
    favoriteState: 1, // 資料庫1是沒按喜歡  0 是有按喜歡
  });

  //取得 like api
  const getFavoriteStatusApi = async (
    callback: (r: { trails_sid: number; status: number }[]) => void
  ) => {
    try {
      const res = await axios.get("http://localhost:3002/getLike", {
        params: { memberSid: Number(localStorage.getItem("sid")) },
      });
      callback(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFavoriteStatusApi((r) => {
      for (let i = 0; i < r.length; i++) {
        if (r[i].trails_sid === row) {
          setForFavoriteData({
            ...forFavoriteData,
            trailSid: row,
            favoriteState: r[i].status,
          });
        }
      }
    });
  }, []);

  const saveLikeApi = async () => {
    try {
      const Like = await axios.get("http://localhost:3002/saveLike", {
        params: forFavoriteData,
      });

      console.log("Like:", Like);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (controlLike !== 0) {
      saveLikeApi();
    }
    return () => {
      setControlLike(0);
    };
  }, [controlLike]);


  return (
    <>
      {!Boolean(forFavoriteData.favoriteState) ? (
        <div className="trailsHearts">
          <FavoriteIcon
            style={{ color: "red", fontSize: "30px" }}
            onClick={() => {
              setForFavoriteData({
                ...forFavoriteData,
                trailSid: row,
                favoriteState: 1,
              });
              setControlLike(new Date().getTime());
            }}
          />
        </div>
      ) : (
        <div className="trailsHearts">
          <FavoriteBorderIcon
            style={{ fontSize: "30px" }}
            onClick={() => {
              setForFavoriteData({
                ...forFavoriteData,
                trailSid: row,
                favoriteState: 0,
              });
              setControlLike(new Date().getTime());
            }}
          />
        </div>
      )}
    </>
  );
}
