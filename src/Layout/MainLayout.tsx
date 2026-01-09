import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopInfiniteBanner from "../Section/Home/Infinite";


export const MainLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      <TopInfiniteBanner/>
      {/* Main content (takes up remaining space) */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
