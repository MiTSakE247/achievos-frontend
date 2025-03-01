import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

export default function AchievosLogo() {
  const theme = useTheme();
  const isLightMode = theme.palette.mode === 'light';

  return (
    <Box
      sx={{
        width: 150,
        height: 'auto',
        filter: isLightMode ? 'invert(0.7)' : 'none', // Inverts colors only in light mode
        transition: 'filter 0.3s ease-in-out',
      }}
    >
      <img
        src="/AchievosLogo.png"
        alt="Achievos Logo"
        width="100%"
        style={{ display: 'block' }}
      />
    </Box>
  );
}
