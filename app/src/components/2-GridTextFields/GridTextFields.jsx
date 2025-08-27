import React from "react";
import { Container, Grid, TextField, Button, Typography } from "@mui/material";

export default function RegisterForm() {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight={{ xs: "light", sm: "normal", lg: "bold" }}
        gutterBottom
      >
        Create Account
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label="Full Name" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label="Username" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label="Age" variant="outlined" type="number" />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Email" variant="outlined" type="email" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Bio"
            variant="outlined"
            multiline
            rows={4}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            sx={{
              py: "0.75rem",
              fontWeight: "bold",
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            SIGN UP
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
