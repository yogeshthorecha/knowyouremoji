import { useState } from "react";
import "./styles.css";

const emojis = {
  "😍": "loving",
  "✌": "two finger",
  "🌹": "rose",
  "🤞": "korean heart",
  "😎": "savage",
  "👀": "eyes",
  "😊": "smiley",
  "😂": "lmao",
  "❤": "heart",
  "😉": "wink",
  "😢": "crying",
  "😘": "flyingkiss"
};
var emojiWeKnow = ["😍", "✌", "🌹", "🤞", "😎", "👀","😊","😂","❤","😉"];
export default function App() {
  var [meaning, setMeaning] = useState("");
  function onChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojis[userInput];
    if (meaning === undefined) {
      setMeaning("oops! we don't have this emoji in our database");
    } else {
      setMeaning(meaning);
    }
  }
  function onClickHandler(item) {
    var userClick = item;

    setMeaning(emojis[userClick]);
  }

  return (
    <div className="App">
      <h1> iinside out </h1>
      <input
        style={{ padding: "0.4rem", width: "30%" }}
        placeholder="put an emoji to know the meaning of it!!!"
        onChange={onChangeHandler}
      ></input>
      <h2>{meaning}</h2>
      <h4>emojis we know</h4>
      {emojiWeKnow.map((item) => {
        return (
          <span
            onClick={() => onClickHandler(item)}
            style={{
              fontSize: "1.5rem",
              paddingLeft: "1.2rem",
              cursor: "pointer"
            }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
