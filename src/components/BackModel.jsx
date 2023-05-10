import { useState } from "react";
import { createPortal } from "react-dom";
import BackModelSec from "./BackModelSec";

export default function BackModel({ setModelOpen, setThankModelOpen }) {
  let ModelSec = [
    {
      title: "Pledge with no reward",
      pledge: "",
      text: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
      left: null,
    },
    {
      title: "Bamboo Stand",
      pledge: "$25 or more",
      text: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      left: 101,
    },
    {
      title: "Black Edition Stand",
      pledge: "$75 or more",
      text: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included. ",
      left: 64,
    },
    {
      title: "Mahogany Special Edition",
      pledge: "$200 or more ",
      text: " You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      left: 0,
    },
  ];

  const [radioTitle, setRadioTitle] = useState("");

  const togglePayActive = (e) => {
    setRadioTitle(e.target.value);
  };

  const handleClose = () => {
    setModelOpen(false);
    setThankModelOpen(true);
  };

  return createPortal(
    <div className="backmodel-out">
      <div className="backmodel-container">
        <div className="backmodel-head">
          {
            <span onClick={handleClose} id="close-backmodel">
              <img src="/images/icon-close-modal.svg" alt="close icon" />
            </span>
          }

          <h2 className="header2">Back this Project</h2>
          <p className="about-text">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
        </div>
        {ModelSec.map((sec) => (
          <BackModelSec
            key={sec.title}
            backSec={sec}
            radioTitle={radioTitle}
            togglePayActive={togglePayActive}
            setModelOpen={setModelOpen}
            setThankModelOpen={setThankModelOpen}
          />
        ))}
      </div>
    </div>,
    document.body
  );
}
