import React from "react";
import AppNavBar from "../../components/Navbar/AppNavBar";
import Footer from "../../components/Footer/Footer";
import NotFound from "./NotFound";

function NotFoundPage() {
  return (
    <div>
      <AppNavBar />
      <NotFound />
      <Footer />
    </div>
  );
}

export default NotFoundPage;
