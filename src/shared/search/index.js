import React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";

function InputSearch({
    onChange,
}) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <FormControl sx={{ m: 1 }} variant="outlined">
        <OutlinedInput
          id="outlined-adornment-segment"
          type={"text"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle Segment visibility" edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          label="Search"
          placeholder="Search"
          sx={{
            ".MuiOutlinedInput-input": {
              padding: "9px 14px",
            },
          }}
          onChange={onChange}
        />
      </FormControl>
    </div>
  );
}

export default InputSearch;
