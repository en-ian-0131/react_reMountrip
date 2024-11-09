import "./styles/App.css";

import MountainLogin from "./Pages/MountripPages/MountainLogin";
import TrailsProducts from "./Pages/MountripPages/TrailsProducts";
import MountainNavbar from "./Pages/MountripPages/MountainNavbar";
import MountainMain from "./Pages/MountripPages/MountainMain";
import MountainMember from "./Pages/MountripPages/MountainMember";
import MountainCart from "./Pages/MountripPages/MountainCart";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { CartProvider } from "./components/MountripComponent/context/CartContext";
import MemberCoupon from "./components/MountripComponent/member/MemberCoupon";
import MemberFavorite from "./components/MountripComponent/member/MemberFavorite";
import MemberHistory from "./components/MountripComponent/member/MemberHistory";
import MemberAchievement from "./components/MountripComponent/member/MemberAchievement";
import MemberLayout from "./components/MountripComponent/member/MemberLayout";
import { LoginProvider } from "./components/MountripComponent/context/LoginContext";
import TestIan from "./Pages/MountripPages/TestIan";

function App() {
  const MounTripRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MountainNavbar />}>
        <Route index element={<MountainMain />} />
        <Route path="/products" element={<TrailsProducts />}></Route>
        <Route path="/Login" element={<MountainLogin />}></Route>
        <Route path="/test" element={<TestIan />}></Route>
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

export default App;
