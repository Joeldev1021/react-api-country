/* eslint-disable guard-for-in */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useContext, useEffect, useState } from "react";

import { FaRegMoon, FaMoon } from "react-icons/fa";
import { ContextTheme } from "../../context/ContextTheme";
import "./header.css";

const Header = () => {
  const storageTheme = JSON.parse(window.localStorage.getItem("theme"));
  const [switchTheme, setSwitchTheme] = useState(storageTheme || false);

  const themeContext = useContext(ContextTheme);

  const changeTheme = (theme) => {
    // eslint-disable-next-line guard-for-in
    // eslint-disable-next-line no-restricted-syntax
    for (const key of Object.keys(theme)) {
      document.documentElement.style.setProperty(key, theme[key]);
    }
  };

  const handleTheme = () => {
    setSwitchTheme(!switchTheme);
    switchTheme
      ? changeTheme(themeContext.darkTheme)
      : changeTheme(themeContext.lightTheme);
  };
  window.localStorage.setItem("theme", JSON.stringify(switchTheme));

  useEffect(() => {
    if (!switchTheme) {
      changeTheme(themeContext.darkTheme);
    }
  }, []);

  return (
    <header className="header">
      <div className="container">
        <h4 className="header__title">Where in the world?</h4>
        <button
          type="button"
          onClick={() => handleTheme()}
          className="btn__dark"
        >
          {switchTheme ? (
            <FaRegMoon className="moonIcons" />
          ) : (
            <FaMoon className="moonIcons" />
          )}
          Dark modo
        </button>
      </div>
    </header>
  );
};

export default Header;
