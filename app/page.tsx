"use client";
import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";

const YourComponent = () => {
  useEffect(() => {
    // Ensure code runs only on the client side
    if (typeof window !== "undefined") {
      // Close the current Mini App
      WebApp.close();

      // Redirect to another Telegram Mini App
      window.location.href = "https://t.me/PaxyoMini_bot?startapp";
    }
  }, []); // Empty dependency array ensures it runs once when component mounts

  return (
    <>
      {/* Optionally, render some content */}
    </>
  );
};

export default YourComponent;
