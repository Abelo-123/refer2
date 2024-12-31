// telegram.d.ts

declare global {
    interface TelegramWebApp {
      ready: () => void;
      close: () => void;
      expand: () => void;
      sendData: (data: string) => void;
      openLink: (url: string) => void;
      onEvent: (eventType: string, callback: () => void) => void;
      offEvent: (eventType: string, callback: () => void) => void;
      viewportHeight: number;
    }
  
    interface Telegram {
      WebApp: TelegramWebApp;
    }
  
    interface Window {
      Telegram: Telegram;
    }
  }
  
  export {};
  