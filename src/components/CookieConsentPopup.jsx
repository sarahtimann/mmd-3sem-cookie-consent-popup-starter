"use client";
import { useState } from "react";

import { LiaCookieBiteSolid } from "react-icons/lia";
import { IoIosClose } from "react-icons/io";

const CookieConsentPopup = () => {
  const [isAccepted, setIsAccepted] = useState(false); // state till at spore om cookies er accepteret
  const [isClosed, setIsClosed] = useState(false); // state til at spore om der er klikket på luk-knappen
  return (
    !isAccepted &&
    !isClosed && (
      <section className="cookie-consent-popup">
        <header className="cookie-consent-popup-header">
          <LiaCookieBiteSolid size={50} />
          <IoIosClose className="pointer" size={25} onClick={() => setIsClosed(true)} />
        </header>
        <footer className="cookie-consent-popup-footer">
          <p className="cookie-consent-popup-paragraph">We use cookies to improve your user experience!</p>
          <button onClick={() => setIsAccepted(!isAccepted)} className="cookie-consent-popup-cta pointer">
            I like Cookies
          </button>
        </footer>
      </section>
    )
  );
};

export default CookieConsentPopup;
