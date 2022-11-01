import { AppBar, Toolbar, Typography, Grid } from "@mui/material";
import NavMenu from "../../api/model/NavMenu";
import MenuDrop from "../../shared/Icons/MenuDrop";
import SearchBar from "../../shared/SearchBar/SearchBar";

const NavBar = () => {
  const menu = [NavMenu?.first, NavMenu?.second, NavMenu?.third];

  return (
    <AppBar position="static">
      <Toolbar
        variant="dense"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid display={"flex"}>
          <Grid>
            <MenuDrop menu={menu} />
          </Grid>
          <Grid alignSelf={"center"}>
            <Typography variant="h6" color="inherit" component="div">
              App Title
            </Typography>
          </Grid>
        </Grid>
        <SearchBar />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
