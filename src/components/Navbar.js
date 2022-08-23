import "./Navbar.css";
import pvLogo from "../assets/pvLogo.png";
import pvAssistant from "../assets/pvAssistant.png";
import SearchBar from "./SearchBar";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Squash as Hamburger } from "hamburger-react";
import SideBar from "./SideBar";

const RenderInWindow = (props) => {
  const [container, setContainer] = useState(null);
  const newWindow = useRef(window);

  useEffect(() => {
    const div = document.createElement("div");
    setContainer(div);
  }, []);

  useEffect(() => {
    if (container) {
      newWindow.current = window.open(
        "https://pmapp.devpropvivo.com/DigitalAssistant",
        "",
        "width=600,height=400,left=200,top=200"
      );
      newWindow.current.document.body.appendChild(container);
      const curWindow = newWindow.current;
      return () => curWindow.close();
    }
  }, [container]);

  return container && createPortal(props.children, container);
};

function Navbar() {
  const [open, setOpen] = useState();
  const [isToggled, setToggled] = useState(false);
  return (
    <div>
      <div className="Navbar">
        <div className="left-side">
          <Hamburger toggled={isToggled} toggle={setToggled}></Hamburger>
          <a href="https://www.devpropvivo.com/" target="_blank">
            <img src={pvLogo} width="50" height="50"></img>
          </a>
        </div>
        <div className="right-side">
          <SearchBar />
          <button className="PvAsstBtn" onClick={() => setOpen(true)}>
            <img src={pvAssistant} width="52" height="52"></img>
          </button>
          {open && <RenderInWindow>hello world</RenderInWindow>}
        </div>
      </div>
      {isToggled && <SideBar></SideBar>}
    </div>
  );
}

export default Navbar;
