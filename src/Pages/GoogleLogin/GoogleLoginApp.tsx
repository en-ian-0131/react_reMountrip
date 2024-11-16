import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import GoogleLoginMain from "../../components/GoogleLoginComponent/GoogleLoginMain";
import GoogleLoginHome from "../../components/GoogleLoginComponent/GoogleLoginHome";
import GoogleLoginUser from "../../components/GoogleLoginComponent/GoogleLoginUser";
import GoogleLoginPage from "../../components/GoogleLoginComponent/GoogleLoginPage";


export default function GoogleLoginApp() {
  const GoogleLogoinRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<GoogleLoginMain />}>
        <Route index element={<GoogleLoginHome />}></Route>
        <Route path="/user" element={<GoogleLoginUser />}></Route>
        <Route path="/login" element={<GoogleLoginPage />}></Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={GoogleLogoinRouter} />
    </>
  );
}
