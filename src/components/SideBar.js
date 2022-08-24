import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/core.css";
import React from "react";
import "./SideBar.css";

const SideBar = (props) => {
  const menuItemClassName = ({ hover }) =>
    hover ? "my-menuitem-hover" : "my-menuitem";

  return (
    <div className="SideBar">
      <Menu menuButton={<MenuButton>Open menu</MenuButton>}>
        <MenuItem className={menuItemClassName}>New File</MenuItem>
        <MenuItem className={menuItemClassName}>Save</MenuItem>
        <SubMenu label="Edit">
          <MenuItem className={menuItemClassName}>Cut</MenuItem>
          <MenuItem className={menuItemClassName}>Copy</MenuItem>
          <MenuItem className={menuItemClassName}>Paste</MenuItem>
        </SubMenu>
        <MenuItem className={menuItemClassName}>Print...</MenuItem>
      </Menu>
    </div>
  );
};

export default SideBar;
