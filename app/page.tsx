import { useEffect } from "react";

const YourComponent = () => {
  useEffect(() => {
    // Load the Telegram Web App JavaScript SDK
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-web-app.js?2";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Ensure Telegram WebApp is loaded
      const Telegram = window.Telegram;

      // Initialize the WebApp
      Telegram.WebApp.ready();

      // Function to close the current Mini App and redirect to another one
      const redirectToAnotherMiniApp = () => {
        // Close the current Mini App
        Telegram.WebApp.close();

        // Open the new Mini App (user has to click it)
        setTimeout(() => {
          window.open("https://t.me/another_bot?startapp", "_blank");
        }, 100);
      };

      // Example: Trigger redirect to another Mini App after 3 seconds
      setTimeout(redirectToAnotherMiniApp, 3000); // Optional, remove if not needed
    };

    return () => {
      // Cleanup when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>Welcome to My Mini App</h1>

    </div>
  );
};

export default YourComponent;