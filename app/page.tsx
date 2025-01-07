"use client";
import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";

const YourComponent = () => {
  useEffect(() => {
    // Ensure code runs only on the client side
    if (typeof window !== "undefined") {
      // Close the current Mini App
      WebApp.close();

      // Redirect to another Telegram Mini App after closing
      setTimeout(() => {
        window.location.href = "https://t.me/PaxyoMini_bot?startapp";
      }, 100); // 100ms delay to allow WebApp.close() to complete
    }
  }, []); /// Empty dependency array ensures it runs once when component mounts

  return (
    <>
      {/* Optionally, render some content */}
    </>
  );
};

export default YourComponent;
