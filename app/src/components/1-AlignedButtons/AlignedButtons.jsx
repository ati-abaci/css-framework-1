import React, { useState } from "react";
import { Button, Stack } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export default function AlignButtons() {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleDisableClick = () => {
    setIsDisabled(true);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="text"
        color="primary"
        disabled={isDisabled}
        onClick={handleDisableClick}
        sx={{ py: "0.5rem", px: "2rem" }}
      >
        Disable Me
      </Button>

      <Button
        variant="contained"
        color="success"
        startIcon={<PersonIcon />}
        sx={{ py: "0.5rem", px: "2rem" }}
      >
        Profile
      </Button>

      <Button
        variant="outlined"
        color="warning"
        href="https://mui.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ py: "0.5rem", px: "2rem" }}
      >
        Visit MUI
      </Button>
    </Stack>
  );
}
