"use client";

import { FaWhatsapp } from "react-icons/fa6";

export function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/17738653770";

  return (
    <div className="ge-whatsapp-float-wrapper">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="ge-whatsapp-float"
        aria-label="Chat with Go Execution on WhatsApp (+1 773 865-3770)"
      >
        <span className="ge-whatsapp-float__pulse" aria-hidden="true" />
        <FaWhatsapp className="ge-whatsapp-float__icon" />
        <span className="ge-whatsapp-float__tooltip">Chat with us</span>
      </a>
    </div>
  );
}
