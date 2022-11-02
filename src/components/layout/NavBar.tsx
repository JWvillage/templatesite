import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Stack,
  Divider,
  Paper,
  styled,
} from "@mui/material";
import NavMenu from "../../api/model/NavMenu";
import { MenuDrop, SearchBar } from "../../shared";
import { Link } from "react-router-dom";

const NavBar = () => {
  // const menu = [NavMenu?.first, NavMenu?.second, NavMenu?.third];

  const Item = styled(Link)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    // ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    // cursor: "pointer",
    textDecoration: "none",
    alignSelf: "center",
  }));

  return (
    <div style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.48)" }}>
      <Toolbar
        variant="dense"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid display={"flex"}>
          {/* <Grid>
            <MenuDrop menu={menu} />
          </Grid> */}
          <Grid alignSelf={"center"} display={"flex"}>
            <Typography variant="h6" component="div">
              App Title
            </Typography>
          </Grid>
          <Grid display={"flex"} marginLeft={"50px"}>
            <Stack
              direction={"row"}
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
              height={34}
            >
              <Item to="/">홈HOME</Item>
              <Item to="/Site1">브오디VOD</Item>
              {/* <Item to="/Site3">Site 3</Item> */}
            </Stack>
          </Grid>
          <Grid alignSelf={"center"} marginLeft={"50px"}>
            <SearchBar />
          </Grid>
        </Grid>
      </Toolbar>
    </div>
  );
};

export default NavBar;
