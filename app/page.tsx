"use client"
import { useEffect } from "react";

const YourComponent = () => {
  useEffect(() => {
    // Load the Telegram Web App JavaScript SDK
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-web-app.js?2";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {

      const Telegram = window.Telegram;
      if (Telegram?.WebApp) {


        setTimeout(() => {

          Telegram.WebApp.close(); // Closes the current Mini App
          window.location.href = "https://t.me/PaxyoMini_bot?startapp";
        }, 1);
      } else {
        console.error("Failed to initialize Telegram WebApp.");
      }
    };



  }, []);

  return (
    <>
    </>
  );
};

export default YourComponent;
