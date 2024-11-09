import "../../styles/App.css"

import MountainLogin from "./MountainLogin";
import TrailsProducts from "./TrailsProducts";
import MountainNavbar from "./MountainNavbar";
import MountainMain from "./MountainMain";
import MountainMember from "./MountainMember";
import MountainCart from "./MountainCart";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { CartProvider } from "../../components/MountripComponent/context/CartContext";
import MemberCoupon from "../../components/MountripComponent/member/MemberCoupon";
import MemberFavorite from "../../components/MountripComponent/member/MemberFavorite";
import MemberHistory from "../../components/MountripComponent/member/MemberHistory";
import MemberAchievement from "../../components/MountripComponent/member/MemberAchievement";
import MemberLayout from "../../components/MountripComponent/member/MemberLayout";
import { LoginProvider } from "../../components/MountripComponent/context/LoginContext";

function MountripApp() {
  const MounTripRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MountainNavbar />}>
        <Route index element={<MountainMain />} />
        <Route path="/products" element={<TrailsProducts />}></Route>
        <Route path="/Login" element={<MountainLogin />}></Route>
        <Route path="/member" element={<MemberLayout />}>
          <Route index element={<MountainMember />} />
          {/* <Route path=":page" element={<MountainMember />} 
          loader={(params)=>{
            console.log("123:",params)
            return params
          }}/> */}
          <Route path="coupon" element={<MemberCoupon />} />
          <Route path="favorite" element={<MemberFavorite />} />
          <Route path="history" element={<MemberHistory />} />
          <Route path="achieve" element={<MemberAchievement />} />
        </Route>
        <Route path="/Cart" element={<MountainCart />}></Route>
      </Route>
    )
  );

  return (
    <div className="container">
      <CartProvider>
        <LoginProvider>
          <RouterProvider router={MounTripRouter} />
        </LoginProvider>
      </CartProvider>
    </div>
  );
}

export default MountripApp;
