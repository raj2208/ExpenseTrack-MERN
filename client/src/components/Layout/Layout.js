import React from "react";
import Footer from "./Footer";
import Header from "./Header";

//agar yeh nahi likhenge toh props.children karke use karna padega
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content container mt-4">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
