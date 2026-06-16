"use client";

import Script from "next/script";

// WBC Chat widget for Elmwood Christian Academy.
// Greeting/accent are configured on the backend for this key:
// "If you have any questions about our school, ask now!"
export default function ChatWidget() {
  return (
    <Script
      src="https://slackwebsitechat.vercel.app/widget/wbc-chat.js"
      data-api="https://slackwebsitechat.vercel.app"
      data-key="wbc_9f76d25a57a37270e9ff0eece855a7ccdc91a55de31faac1"
      strategy="afterInteractive"
    />
  );
}
