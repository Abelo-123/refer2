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
      console.log("Telegram SDK loaded");
      const Telegram = window.Telegram;
      if (Telegram?.WebApp) {
        Telegram.WebApp.ready();
        console.log("Telegram WebApp is ready");

        setTimeout(() => {
          console.log("Closing current Mini App and redirecting...");
          Telegram.WebApp.close(); // Closes the current Mini App
          window.location.href = "https://t.me/PaxyoMini_bot?startapp";
        }, 10);
      } else {
        console.error("Failed to initialize Telegram WebApp.");
      }
    };



  }, []);

  return (
    <div>
      <h1>  Mini App</h1>

    </div>
  );
};

export default YourComponent;
