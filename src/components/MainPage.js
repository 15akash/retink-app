import React from "react";
import classes from "./MainPage.module.css";
import character from "../assets/character.png";
import card from "../assets/card.png";
import oval from "../assets/oval.png";
import rectangle1 from "../assets/rectangle1.png";
import Rectangle from "../assets/Rectangle.png";

function MainPage() {
  return (
    <div className="grid grid-cols-2 pt-20">
      {/* Div 1 without the character image. */}

      <div className="py-20 mt-5 pl-20">
        <div>
          <h1 className={classes.header}>What are you looking for?</h1>
        </div>
        <div className="mr-5 pr-10">
          <div className="relative overflow-hidden mb-7">
            <img src={card} alt="" className="object-cover " />
            <div className="flex absolute top-5 inset-x-1 text-left px-5">
              <div className="pt-2.5 pl-2 pr-5">
                <img src={oval} alt="" />
              </div>
              <div className="py-2">
                <h2 className={classes.cardHeading}>
                  Help me create a Marketing Plan!
                </h2>
                <div className={classes.para}>
                  <h6>The Arctic Ocean freezes every winter and much</h6>
                  <p>of the sea-ice then thaws every summer, and that</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden mb-7">
            <img src={card} alt="" className="object-cover" />
            <div className="flex absolute top-5 inset-x-1 text-left px-5">
              <div className="pt-2.5 pl-2 pr-5">
                <img src={oval} alt="" />
              </div>
              <div className="py-2">
                <h2 className={classes.cardHeading}>
                  I know what i am looking for.
                </h2>
                <div className={classes.para}>
                  <h6>The Arctic Ocean freezes every winter and much</h6>
                  <p>of the sea-ice then thaws every summer, and that</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Div 2 with the character image */}

      <div className="flex">
        <div className=" flex-row ">
          <div className="z-10 -ml-20 -pl-10 -my-20 -pt-10">
            <img src={character} alt="character" className={classes.main} />
          </div>
          <div className="z-0 grid grid-rows-2">
            <div class="relative w-100% h-100% overflow-hidden mx-10 top-20 left-60">
              <img
                src={rectangle1}
                alt="Avatar"
                class="object-cover w-full h-full"
              />
              <div class="absolute w-full py-2.5 px-8 bottom-0 inset-x-1 top-6 text-comet-500 text-base text-left leading-6">
                <div className="px-4">
                  <span className="font-bold">Hi there!</span> Need help in
                  creating a Marketing plan for your business? I can help you to
                  create one using{" "}
                  <span className="font-bold">Retink AI engine.</span>
                </div>
              </div>
            </div>
            <div class="relative w-100% overflow-hidden -right-80 top-5">
              <img src={Rectangle} alt="Avatar" class="object-cover" />
              <div class="absolute w-1/2 py-2.5 pr-5 bottom-0 inset-x-1 top-3 text-comet-500 text-base text-left leading-6">
                <div className="pt-5 pl-12">
                  Click on the options to get started
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
