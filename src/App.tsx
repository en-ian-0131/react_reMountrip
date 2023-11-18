import "./styles/App.css";

import MountainLogin from "./Pages/MountainLogin";
import TrailsProducts from "./Pages/TrailsProducts";
import MountainNavbar from "./Pages/MountainNavbar";
import MountainMain from "./Pages/MountainMain";
import MountainMember from "./Pages/MountainMember";
import MountainCart from "./Pages/MountainCart";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { CartProvider } from "./components/context/CartContext";
import MemberCoupon from "./components/member/MemberCoupon";
import MemberFavorite from "./components/member/MemberFavorite";
import MemberHistory from "./components/member/MemberHistory";
import MemberAchievement from "./components/member/MemberAchievement";
import MemberLayout from "./components/member/MemberLayout";
import { LoginProvider } from "./components/context/LoginContext";
import TestIan from "./Pages/TestIan";

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
