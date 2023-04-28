import React, { useState, useEffect } from "react";
import "./Search.css";
import { CiDark, CiLight } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  // const { resolvedTheme, setTheme } = useTheme();
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div style={{ marginBottom: "3rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "3rem",
        }}
        className={`user__header${theme}`}
      >
        <h3>devfinder</h3>
        <div className="user__header--content" onClick={toggleTheme}>
          {theme === "dark" ? (
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <p>light</p>
              <CiLight style={{ color: "#fff", fontSize: "24px" }} />
            </div>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <p>Dark</p>
              <CiDark style={{ color: "#333", fontSize: "24px" }} />
            </div>
          )}
        </div>
      </div>
      <div className="search__user">
        <div className="icon">
          <FiSearch />
        </div>
        <input
          type="text"
          id="user"
          placeholder="Search Github username..."
          className="search"
        />
        <div className="submit__search">
          <input type="submit" value="search" />
        </div>
      </div>
    </div>
  );
};

export default Search;
