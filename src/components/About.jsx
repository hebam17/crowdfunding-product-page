import React from "react";
import Reward from "./Reward";

export default function About() {
  let rewardList = [
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

  return (
    <div className="about">
      <h2 className="header2">About this project</h2>

      <p className="about-text">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand. Featuring artisan craftsmanship, the simplicity of design
        creates extra desk space below your computer to allow notepads, pens,
        and USB sticks to be stored under the stand
      </p>

      <div className="reward-container">
        {rewardList.map((reward) => (
          <Reward key={reward.title} reward={reward} />
        ))}
      </div>
    </div>
  );
}
