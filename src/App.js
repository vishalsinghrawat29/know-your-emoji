import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😲": "disbelief",
  "😔": "sad",
  "❤️": "love",
  "✨": "sparkles",
  "🤔": "thinking"
};

//convert object to array
var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our databse";
    }

    console.log(meaning);
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    // console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Outtt</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3>emojis we Know</h3>
      {
        <span>
          {emojiWeKnow.map(function (emoji) {
            return (
              <span
                onClick={() => emojiClickHandler(emoji)}
                style={{
                  fontSize: "2rem",
                  padding: "0.5rem",
                  cursor: "pointer"
                }}
                key={emoji}
              >
                {emoji}
              </span>
            );
          })}
        </span>
      }
    </div>
  );
}
