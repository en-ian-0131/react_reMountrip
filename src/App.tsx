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

function App() {
  const MounTripRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MountainNavbar />}>
        <Route index element={<MountainMain />} />
        <Route path="/products" element={<TrailsProducts />}></Route>
        <Route path="/login" element={<MountainLogin />}></Route>
        <Route path="/member" element={<MountainMember />}></Route>
        <Route path="/cart" element={<MountainCart />}></Route>
      </Route>
    )
  );

  return (
    <div className="container">
      <CartProvider>
        <RouterProvider router={MounTripRouter} />
      </CartProvider>
    </div>
  );
}

export default App;
