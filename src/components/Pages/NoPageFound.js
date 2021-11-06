import "./NoPageFound.css";
import character from "../../assets/character.png";

function NoPageFound(props) {
  return (
    <div>
      <div className="w-1/2">
        <img src={character} alt="character" className="absolute left-72" />

        {/* Captions' div */}

        <div className="talk-bubble tri-right round right-in text-comet-500 shadow-2xl drop-shadow-2xl absolute left-36 top-44">
          <div className="talktext">
            <p>
              Hi! Welcome to our {props.pageName} page. We are currently
              updating them and request you to get back soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoPageFound;
