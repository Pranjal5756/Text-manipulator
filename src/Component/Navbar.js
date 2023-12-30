import React from "react";

function Navbar(props) {
  return (
    <div>
      <div>
        <h1
          className={`bg-${props.mode} text-center p-4 text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          {props.title}
        </h1>
      </div>

      {/* darkmode  */}
      <div className="form-check form-switch mx-2 my-2">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={props.toggleMode}
        />
        <label
          className={`form-check-label text-${
            props.mode === "light" ? "dark" : "light"
          }`}
          htmlFor="flexSwitchCheckDefault"
        >
          <strong>DarkMode</strong>
        </label>
      </div>
    </div>
  );
}

export default Navbar;
