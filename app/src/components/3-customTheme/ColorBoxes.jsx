import { Box, Typography } from "@mui/material";

export default function ColorBoxes() {
  return (
    <Box display="flex" flexDirection="column" gap={2} p={4}>
      <Box
        sx={{
          backgroundColor: "primary.main",
          height: 100,
          borderRadius: 2,
        }}
      >
        <Typography color="white" p={2}>
          Primary Color
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "secondary.main",
          height: 100,
          borderRadius: 2,
        }}
      >
        <Typography color="white" p={2}>
          Secondary Color
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "success.main",
          height: 100,
          borderRadius: 2,
        }}
      >
        <Typography color="white" p={2}>
          Success Color
        </Typography>
      </Box>
    </Box>
  );
}
