"use client";

import { useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = "918860822800";
const WHATSAPP_DISPLAY = "+91 88608 22800";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20ScaleChefs%20team%21%20I%27m%20interested%20in%20your%20services%20and%20would%20love%20to%20know%20more.%20Please%20share%20details.`;

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      fill="currentColor"
      d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z"
    />
    <path
      fill="currentColor"
      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.67c2.2 0 4.28.86 5.83 2.42a8.19 8.19 0 0 1 2.42 5.82c0 4.54-3.7 8.23-8.25 8.23a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.24-8.24z"
    />
  </svg>
);

export default function WhatsAppFab() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className={`wa-fab-wrap ${open ? "is-open" : ""}`} ref={wrapRef}>
      {open && (
        <div className="wa-fab-popup" role="dialog" aria-label="Chat with us on WhatsApp">
          <button
            type="button"
            className="wa-fab-close"
            aria-label="Close WhatsApp popup"
            onClick={() => setOpen(false)}
          >
            <span aria-hidden="true">×</span>
          </button>
          <div className="wa-fab-head">
            <span className="wa-fab-avatar" aria-hidden="true">
              <WhatsAppIcon />
            </span>
            <div className="wa-fab-head-text">
              <strong>Chat with ScaleChefs</strong>
              <span className="wa-fab-status">
                <i aria-hidden="true" /> Usually replies instantly
              </span>
            </div>
          </div>
          <p className="wa-fab-body">
            Tap below to start a WhatsApp chat. We&apos;re available Mon–Sat, 10am–7pm IST.
          </p>
          <div className="wa-fab-number">
            <small>WhatsApp number</small>
            <a href={`tel:+${WHATSAPP_NUMBER}`}>{WHATSAPP_DISPLAY}</a>
          </div>
          <a
            className="wa-fab-launch"
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            <WhatsAppIcon />
            Open WhatsApp chat
          </a>
        </div>
      )}

      <button
        type="button"
        className="wa-fab"
        aria-label={open ? "Close WhatsApp chat popup" : "Open WhatsApp chat popup"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <WhatsAppIcon />
        <span className="wa-fab-ping" aria-hidden="true" />
      </button>
    </div>
  );
}