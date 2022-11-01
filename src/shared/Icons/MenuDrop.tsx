import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";

interface Props {
  menu: (String | undefined)[];
}

const MenuDrop: React.FC<Props> = ({ menu }) => {
  const [openOptions, setOpenOptions] = useState(false);

  const openMenu = () => {
    if (openOptions == false) {
      setOpenOptions(true);
    } else {
      setOpenOptions(false);
    }
  };

  return (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
      onClick={openMenu}
    >
      <MenuIcon />
      <Menu open={openOptions} style={{ cursor: "pointer" }}>
        {menu.map((content, i) => {
          return <MenuItem key={i}>{content}</MenuItem>;
        })}
      </Menu>
    </IconButton>
  );
};

export default MenuDrop;
