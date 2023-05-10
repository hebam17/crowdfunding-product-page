import React from "react";
import { createPortal } from "react-dom";

export default function ThanksModel({ setThankModelOpen }) {
  return createPortal(
    <div className="backmodel-out thank-model">
      <div className="thank-container">
        <div className="header">
          <div>&#x2713;</div>
        </div>
        <div className="body">
          <h2 className="header1">Thanks for your support!</h2>
          <div className="thank-text">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </div>
          <button
            className="cta-back-btn"
            onClick={() => {
              setThankModelOpen(false);
            }}
          >
            Got it!
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
