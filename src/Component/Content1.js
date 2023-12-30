import React, { useState } from "react";

function Content(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleRomoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
  };
  const handlePaste = async () => {
    navigator.clipboard
      .readText()
      .then((clipText) => {
        setText(clipText);
      })
      .catch((error) => {
        console.error("failed to read clipboard contents: .", error);
      });
  };
  const handleSlice = () => {
    let b = "";
    let a = prompt("Starting Index Only", b);

    if (a === "yes" || a === "Yes" || a === "YES") {
      let newText = text.slice(prompt("Enter Start From"));
      setText(newText);
    } else {
      let newText = text.slice(
        prompt("Enter Start From"),
        prompt("Enter End To")
      );
      setText(newText);
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div>
        <div
          className={`container my-3 text-center text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <strong>
            <p>
              {
                text.split(" ").filter((Element) => {
                  return Element.length;
                }).length
              }{" "}
              {text.split(" ").filter((Element) => {
                return Element.length;
              }).length === 1 ||
              text.split(" ").filter((Element) => {
                return Element.length;
              }).length === 0
                ? "word"
                : "words"}{" "}
              {text.length}{" "}
              {text.length === 1 || text.length === 0
                ? "character"
                : "characters"}
            </p>
          </strong>
        </div>
        <h5 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          <strong>{props.heading}</strong>
        </h5>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="14"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              borderRadius: "10px",
              color: props.mode === "dark" ? "white" : "black",
              borderWidth: "4px",
            }}
          ></textarea>
        </div>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } mx-2 my-2  `}
          onClick={handleUpClick}
        >
          Convert To Uppercase
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } mx-2 my-2  `}
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } mx-2 my-2  `}
          onClick={handleLoClick}
        >
          Convert To Lowercase
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } mx-2 my-2  `}
          onClick={handleClear}
        >
          Clear Text
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } mx-2 my-2  `}
          onClick={handleRomoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } mx-2 my-2  `}
          onClick={handlePaste}
        >
          Paste
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } mx-2 my-2  `}
          onClick={handleSlice}
        >
          slice
        </button>
      </div>
    </>
  );
}

export default Content;
