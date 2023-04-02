import { useContext, useEffect } from "react";
import { backContext } from "../context/backs/Back";

export default function Info() {
  const { backState, backDispatch } = useContext(backContext);
  let percent;

  const splitNumber = (num) => {
    console.log(num.toString().slice(0, 2));
    return `${num.toString().slice(0, -3)},${num.toString().slice(-3)}`;
  };

  useEffect(() => {
    console.log(backState);
    percent = Math.round(
      (backState.backedMony / backState.backedExpected) * 100
    );
  }, []);

  return (
    <div id="info">
      <div className="info-data">
        <div className="info-backed">
          <div className="number">${splitNumber(backState.backedMony)}</div>
          <div className="text">
            of ${splitNumber(backState.backedExpected)} backed
          </div>
        </div>

        <div className="info-backers">
          <div className="number">{splitNumber(backState.backers)}</div>
          <div className="text">total backers</div>
        </div>
        <div className="info-days">
          <div className="number">{backState.daysLeft}</div>
          <div className="text">days left</div>
        </div>
      </div>
      <div className="info-bar">
        <div
          className="info-percent-bar"
          style={{
            width: `${Math.round(
              (backState.backedMony / backState.backedExpected) * 100
            )}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
