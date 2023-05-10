import { useState, useContext } from "react";
import { backContext } from "../context/backs/Back";
import { addingBacks } from "../context/backs/backActions";

export default function BackModelSec({
  togglePayActive,
  radioTitle,
  backSec,
  setModelOpen,
  setThankModelOpen,
}) {
  const { title, pledge, text, left } = backSec;
  const [money, setMoney] = useState("");
  const { backDispatch } = useContext(backContext);

  const handleBack = () => {
    if (parseInt(money)) {
      backDispatch(addingBacks(parseInt(money)));
      setModelOpen(false);
      setThankModelOpen(true);
    }
  };

  return (
    <div
      className={
        !(left === 0) && title === radioTitle
          ? "reward reward-active"
          : !(left === 0)
          ? "reward"
          : "out-of-stock"
      }
    >
      {/* HEAD START */}
      {/* input */}
      <div className="backmodel-wrapper">
        <div className="backmodel-header">
          <label className="check-input">
            <input
              type="radio"
              name="backed"
              value={title}
              disabled={left === 0}
              checked={title === radioTitle}
              onChange={togglePayActive}
            />
            <span className="checkmark"></span>
          </label>
          {/* ////////// */}
          {/* titles */}
          <div className="backmodel-header-right">
            <div className="backmodel-titles">
              <h2 className="header3">{title}</h2>
              <p
                className="pledge"
                style={pledge ? { display: "block" } : { display: "none" }}
              >
                pledge {pledge}
              </p>
            </div>

            <div
              className="backmodel-left left-before"
              style={!left ? { display: "none" } : {}}
            >
              <div className="backmodel-left-num">{left}</div>{" "}
              <div className="about-text-sm">left</div>
            </div>
          </div>
        </div>

        {/* //////// */}
        {/* left */}
        {/* /////////// */}
        <div className="about-text backmodel-text">{text}</div>
        <div
          className="backmodel-left left-after"
          style={!left ? { display: "none" } : {}}
        >
          <div className="backmodel-left-num">{left}</div>
          <div className="about-text-sm">left</div>
        </div>
      </div>
      {/* HEADEND */}
      {title === radioTitle && (
        <div className="pay-pledge">
          <div className="pay-wrapper">
            <div className="pay-text">Enter your pledge</div>
            <div className="pay-action">
              <div className="pay-input">
                <input
                  type="text"
                  name="money"
                  value={money}
                  onChange={(e) => {
                    setMoney(e.target.value);
                  }}
                />
                <span className="pay-currency">$</span>
              </div>
              <button
                type="button"
                className="cta-back-btn"
                onClick={handleBack}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
      {/* //////////////////// */}
    </div>
  );
}

// import React from "react";

// export default function BackModelSec() {
//   return <div>BackModelSec</div>;
// }
