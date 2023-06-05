import "./App.css";
import { React } from "react";
import Login from "./components/login/Login";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Invoice from "./pages/dashboard/invoice/Invoice";
import Orders from "./pages/dashboard/Orders";
import ProductCategory from "./pages/dashboard/ProductCategory";
import Products from "./pages/dashboard/Products/Products";
import Settings from "./pages/dashboard/Settings";
import PrivateRoute from "./utils/PrivateRoutes";
function App() {
  // useEffect(() => {
  //   const token = localStorage.getItem('jwt');
  //   if (!token) {
  //     window.location.href = '/login';
  //   }
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Login />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/" element={<MainPage />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/invoice" element={<Invoice />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product-category" element={<ProductCategory />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
