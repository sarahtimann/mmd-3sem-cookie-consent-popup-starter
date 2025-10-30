"use client";
import { useState } from "react";

const CookieAcceptButton = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  return (
    <button onClick={() => setIsAccepted(!isAccepted)} className="cookie-consent-popup-cta pointer">
      I like Cookies
    </button>
  );
};

export default CookieAcceptButton;
