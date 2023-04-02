import { useState } from "react";

export default function CTA({ setModelOpen, modelOpen }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="cta">
      <div className="cta-logo">
        <img src="/images/logo-mastercraft.svg" alt="logo" />
      </div>
      <h1 id="cta-title">Mastercraft Bamboo Monitor Riser</h1>
      <p className="cta-para">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="cta-btns">
        <button
          className="cta-back-btn"
          type="button"
          onClick={() => {
            setModelOpen(true);
          }}
        >
          Back this project
        </button>

        <div
          className={`cta-bookmark ${isActive ? "active" : ""}`}
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <div>Bookmark</div>
          <button type="button"></button>
        </div>
      </div>
    </div>
  );
}
