import { Container, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import "../../App.css";
import MainLink from "./MainLink";

const Main = () => {
  return (
    <>
      <NavBar />
      <Container>
        <MainLink />
      </Container>
    </>
  );
};

export default Main;
