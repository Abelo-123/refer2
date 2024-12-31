"use client"
import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";

const YourComponent = () => {
  useEffect(() => {
    // Load the Telegram Web App JavaScript SDK


    WebApp.close(); // Closes the current Mini App
    window.location.href = "https://t.me/PaxyoMini_bot?startapp";

  }, []);

  return (
    <>

    </>
  );
};

export default YourComponent;
