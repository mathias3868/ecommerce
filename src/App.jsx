import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/HomePage/HomePage";
import About from "../src/pages/AboutPage/About";
import Cart from "../src/pages/Cart/Cart";
import Contact from "../src/pages/ContactPage/Contact";
import Login from "../src/pages/Forms/Login";
import Signup from "../src/pages/Forms/Signup";
import AccountDetails from "../src/pages/AccountPage/AccountDetails";
import { ItemProvider } from "./contexts/ItemContext";
import AllProductsCat from "./pages/HomePage/outlets/allproducts/AllProductsCat";
import CategoriesProducts from "./pages/HomePage/outlets/categoriesproducts/CategoriesProducts";
import ProductDiscription from "./pages/discription/ProductDiscription";
import WishList from "./pages/WishlistPage/WishList";
import NotFoundPage from "./pages/404Page/404";
import { AuthProvider } from "./contexts/AuthContext";
import FormFrame from "./pages/Forms/FormFrame";

function App() {
  return (
    <AuthProvider>
      <ItemProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}>
              <Route index element={<Navigate replace to={"all_products"} />} />
              <Route path="all_products" element={<AllProductsCat />} />
              <Route
                path="/all_products/:category"
                element={<CategoriesProducts />}
              />
            </Route>
            <Route
              path="/products/:category/:id"
              element={<ProductDiscription />}
            />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<Contact />} />
            <Route path="form" element={<FormFrame />}>
              <Route index element={<Navigate replace to={"login"} />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
            <Route path="wishlist" element={<WishList />} />
            <Route path="userdetails" element={<AccountDetails />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ItemProvider>
    </AuthProvider>
  );
}

export default App;
