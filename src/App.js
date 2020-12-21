import React, { useState } from "react";
import "./styles.css";

import { data } from "./data";

export default function App() {
  var emojiList = Object.keys(data);
  var [meaning, setMeaning] = useState("No emoji selected");
  var [emoji, setEmoji] = useState("");
  function inputHandler(event) {
    const emoji = event.target.value;
    var meaning = "";
    if (emoji in data) {
      meaning = data[emoji];
      setEmoji(emoji);
    } else {
      meaning = "sorry we don't have that emoji";
      setEmoji("");
    }
    setMeaning(meaning);
  }
  function emojiHandler(emoji) {
    setMeaning(data[emoji]);
    setEmoji(emoji);
  }
  return (
    <div className="App">
      <h1 className="heading">Know emoji and there meaning</h1>
      {emoji !== "" ? (
        <p className="outemoji">
          {emoji} : {meaning}
        </p>
      ) : (
        <p className="outemoji">{meaning} </p>
      )}

      <input
        className="inemoji"
        onChange={inputHandler}
        placeholder="Enter any emoji"
      ></input>
      <p>Or choose one of them to see some magic happen ! </p>
      <div className="emojiList">
        {emojiList.map((item) => {
          return (
            <span
              className="emoji"
              key={item}
              onClick={() => emojiHandler(item)}
            >
              {item}
            </span>
          );
        })}
      </div>
      <h2>
        {" "}
        If you want to know what do emojis mean, you are in a right place.{" "}
      </h2>
    </div>
  );
}
