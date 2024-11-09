import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import GoogleLoginMain from "../../components/GoogleLoginComponent/GoogleLoginMain";
import GoogleLoginHome from "../../components/GoogleLoginComponent/GoogleLoginHome";
import GoogleLoginUser from "../../components/GoogleLoginComponent/GoogleLoginUser";


export default function GoogleLoginApp() {
  const GoogleLogoinRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<GoogleLoginMain />}>
        <Route index element={<GoogleLoginHome />}></Route>
        <Route path="/user" element={<GoogleLoginUser />}></Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={GoogleLogoinRouter} />
    </>
  );
}
