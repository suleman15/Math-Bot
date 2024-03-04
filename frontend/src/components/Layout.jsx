import { useState } from "react";

const Layout = ({ children }) => {
  return (
    <div>
      {/* <button onClick={toggleDarkMode}>Toggle Dark Mode</button> */}
      {children}
    </div>
  );
};

export default Layout;
