import { useEffect } from "react";

export default function Reward({ reward }) {
  const { title, pledge, text, left } = reward;

  // useEffect(() => {
  //   console.log(left);
  // }, []);
  return (
    <div className={!(left === 0) ? "reward" : "out-of-stock"}>
      <div className="reward-head">
        <h2 className="header3">{title}</h2>
        <p className="pledge about-text">pledge {pledge}</p>
      </div>
      <div className="about-text">{text}</div>
      <div className="reward-action">
        <div className="stock-left">
          <div className="left-num">{left}</div>{" "}
          <div className="about-text-sm"> left</div>
        </div>
        <button className="reward-select" disabled={!(left > 0)}>
          {left > 0 ? "Select Reward" : "Out of stock"}
        </button>
      </div>
    </div>
  );
}
