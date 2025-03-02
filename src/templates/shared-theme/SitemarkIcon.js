import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

export default function AchievosLogo({ width = 150, height = "auto" }) {
  const theme = useTheme();
  const isLightMode = theme.palette.mode === 'light';

  return (
    <Box
      sx={{
        width,
        height,
        filter: isLightMode ? 'invert(0.7)' : 'none', // Inverts colors only in light mode
        transition: 'filter 0.3s ease-in-out',
        cursor: "default", // ✅ Normal cursor by default
        "&:hover": { cursor: "pointer" }, // ✅ Changes to pointer on hover
      }}
      onClick={() => (window.location.href = "/")}
    >
      <img
        src="/AchievosLogo.png"
        alt="Achievos Logo"
        width="100%"
        style={{ objectFit: "contain", display: "block" }}
      />
    </Box>
  );
}
