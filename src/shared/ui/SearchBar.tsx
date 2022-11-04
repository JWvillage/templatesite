import { Paper, IconButton, InputBase, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SetStateAction, useState } from "react";

const SearchBar = () => {
  const [searchWord, setSearchWord] = useState("");

  const searchWordSet = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchWord(event.target.value);
  };

  const search = () => {
    console.log(searchWord);
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 200,
        height: 30,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
        onChange={searchWordSet}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={() => search()}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
