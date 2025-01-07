"use client";
import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";

const YourComponent = () => {
  useEffect(() => {
    // Ensure code runs only on the client side
    if (typeof window !== "undefined") {
      // Redirect to another Telegram Mini App
      WebApp.openTelegramLink("https://t.me/PaxyoMini_bot?startapp=miniapp");

      // Close the current Mini App after redirection is triggered
      setTimeout(() => {
        WebApp.close();
      }, 100); // 100ms delay to ensure the redirection is initiated first
    }
  }, []); // Empty dependency array ensures it runs once when component mounts

  return (
    <>
      {/* Optionally, render some content */}
    </>
  );
};

export default YourComponent;
