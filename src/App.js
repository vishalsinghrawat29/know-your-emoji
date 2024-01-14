import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "😍": "Smiling Face with Heart-Eyes",
  "😘": "Face Blowing a Kiss",
  "🤩": "Star-Struck",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Smiling Face with Open Hands",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😶": "Face Without Mouth",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes",
  "😬": "Grimacing Face",
  "🤥": "Lying Face",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "😪": "Sleepy Face",
  "🤤": "Drooling Face",
  "😴": "Sleeping Face",
  "😎": "Smiling Face with Sunglasses",
  "🤓": "Nerd Face",
  "🧐": "Face with Monocle",
  "😕": "Confused Face",
  "😟": "Worried Face",
  "🙁": "Slightly Frowning Face",
  "☹️": "Frowning Face",
  "😮": "Face with Open Mouth",
  "😯": "Hushed Face",
  "😲": "Astonished Face",
  "😳": "Flushed Face",
  "😦": "Frowning Face with Open Mouth",
  "😧": "Anguished Face",
  "😨": "Fearful Face",
  "😰": "Anxious Face with Sweat",
  "😥": "Sad but Relieved Face",
  "😢": "Crying Face",
  "😭": "Loudly Crying Face",
  "😱": "Face Screaming in Fear",
  "😖": "Confounded Face",
  "😣": "Persevering Face",
  "😞": "Disappointed Face",
  "😓": "Downcast Face with Sweat",
  "😩": "Weary Face",
  "😫": "Tired Face",
  "😤": "Face with Steam From Nose",
  "😷": "Face with Medical Mask",
  "🤒": "Face with Thermometer",
  "🤕": "Face with Head-Bandage",
  "🤧": "Sneezing Face",
  "😵": "Dizzy Face",
  "🤯": "Exploding Head",
  "🤠": "Cowboy Hat Face",
};

//convert object to array
var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("no emoji selected");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our databse";
    }
    if (userInput === "") {
      meaning = "No emoji selected";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    // console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>📚Emoji Dictionary!!</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3>Emojis We Know</h3>
      {
        <div className="container-center">
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
        </div>
      }
      <div className="footer-section">
        <h4>
          Developed by{" "}
          <a href="https://vishalsinghrawat.netlify.app/">Vishal Singh Rawat</a>
        </h4>
        <ul className="social-links list-non-bullet">
          <li className="list-item-inline">
            <a className="link" href="https://github.com/vishalsinghrawat29">
              Github
            </a>
          </li>
          |
          <li className="list-item-inline">
            <a className="link" href="https://twitter.com/vsrawat2906">
              Twitter{" "}
            </a>
          </li>
          |
          <li className="list-item-inline">
            <a
              className="link"
              href="https://www.linkedin.com/in/vishalsinghrawat/"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
