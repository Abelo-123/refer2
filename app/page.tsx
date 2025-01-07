"use client";
import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";

const YourComponent = () => {
  useEffect(() => {
    // Ensure code runs only on the client side
    if (typeof window !== "undefined") {
      try {
        // Attempt to open the link
        WebApp.openTelegramLink("https://t.me/PaxyoMini_bot?startapp=miniapp");

        // If no errors, close the Mini App after a short delay
        setTimeout(() => {
          WebApp.close();
        }, 100); // Adjust delay as needed
      } catch (error) {
        console.error("Failed to redirect using WebApp.openLink:", error);
        // Handle error (optional: show a message or retry logic)
      }
    }
  }, []); // Empty dependency array ensures it runs once when the component mounts
  // Empty dependency array ensures it runs once when component mounts

  return (
    <>
      {/* Optionally, render some content */}
    </>
  );
};

export default YourComponent;
