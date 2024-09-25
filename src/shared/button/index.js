import * as React from "react";
import Stack from "@mui/material/Stack";
import MuiButton from "@mui/material/Button";

export default function Button({
  onClick,
  label,
  variant,
  color,
  disabled = false,
}) {
  return (
    <Stack spacing={2} direction="row">
      <MuiButton
        variant={variant}
        onClick={onClick}
        color={color}
        disabled={disabled}
      >
        {label}
      </MuiButton>
    </Stack>
  );
}
