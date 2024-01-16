import React, { useState } from "react";
import "./EightBall.css";
import _ from "lodash";

// keep this in a separate file & import it

const defaultAnswers = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

// Initial state for EightBall
const defaultResult = {
  msg: "Think of a Question",
  color: "black",
} // could put this directly into useState when initializing

/** EightBall to show user random message/color
 *
 * Props:
 * - Answers: [{msg, color}, {msg, color},...]
 *
 * States:
 * - Result: {msg, color} (Initial State is defaultResult)
 *
 * App -> EightBall
 */

function EightBall({ answers=defaultAnswers }) {

  const [result, setResult] = useState(defaultResult);

  function shakeEightBall() {
    setResult(_.sample(answers)); // good to document in case someone isn't
    // familiar with lodash
  }

  function resetEightBall() { // ok to have docstrings here -- short & sweet
    setResult(defaultResult);
  }

  // tab style on 64 over to make it clear it's part of button
  // span tag would be good for 65 rather than putting p tag inside button
  return (
    <div>
      <button onClick={shakeEightBall} className="EightBall"
      style={{background: `${result.color}`}}>
        <p className="EightBall-text">{result.msg}</p>
      </button>
      <button onClick={resetEightBall}>
        <p>Reset EightBall</p>
      </button>
    </div>
  )
}

export default EightBall;