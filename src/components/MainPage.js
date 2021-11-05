import { Fragment } from "react";
import "./MainPage.css";
import character from "../assets/character.png";
import oval from "../assets/oval.png";
import characterLogo from "../assets/characterLogo.png";
import NavigationBar from "./NavigationBar";

function MainPage() {
  return (
    <Fragment>
      <NavigationBar />
      <div className="mainPage grid grid-cols-2 pt-20 m-auto">
        {/* Div 1 without the character image. */}

        <div className="pt-20 mt-12 pl-20">
          <div className="mainHeading">What are your looking for?</div>

          {/* Cards div */}

          <div className="mr-10">
            {/* Card - 1 */}

            <div className="card bg-white my-10 p-5 flex">
              <img src={oval} alt="oval" className="pr-6 pb-10" />
              <div className="pt-2 pr-2">
                <h2 className="cardHeading pb-5">
                  Help me create a Marketing Plan!
                </h2>
                <p className="cardParagraph ">
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that
                </p>
              </div>
            </div>

            {/* Card - 2 */}

            <div className="card bg-white p-5 flex">
              <img src={oval} alt="oval" className="pr-6 pb-10" />
              <div className="pt-2 pr-2">
                <h2 className="cardHeading pb-5">
                  I know what i am looking for.
                </h2>
                <p className="cardParagraph ">
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Div 2 with the character image */}

        <div className="flex -ml-20">
          <img
            src={character}
            alt="character"
            className="-mx-40 w-full h-full character"
          />
          <img
            src={characterLogo}
            alt=""
            className="w-14 h-14 relative -mx-8 right-28 top-72"
          />

          {/* Captions' div */}

          <div className="mt-5">
            {/* Div with upper caption */}

            <div class="caption upperCaption text-comet-500 w-72">
              <span className="captionWeight">Hi there!</span> Need help in
              creating a Marketing plan for your business? I can help you to
              create one using{" "}
              <span className="captionWeight">Retink AI engine.</span>
            </div>

            {/* Div with lower caption */}

            <div class="caption w-48 -ml-10 lowerCaption text-comet-500">
              Click on the options to get started
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MainPage;
