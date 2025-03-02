import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';
import AchievosLogo from '@templates/shared-theme/SitemarkIcon';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Typography from '@mui/material/Typography';
import SearchAppBar from './SearchAppBar';
import { useRouter } from "next/router";
import { redirect } from "next/navigation";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(20px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
  overflow: 'hidden', // Ensures content doesn't push height
  height: 80, // Set a fixed height
}));

const handleRedirect = (mode) => {
  window.location.href = `/authenticate?mode=${mode}`;
};

export default function NavBar({ setActiveComponent, activeComponent }) {
  const [streak, setStreak] = React.useState(0); // Default streak is 0

  const buttons = ["Dashboard", "Profile", "Awards", "FAQ", "Blog"];

  
  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <AchievosLogo />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {buttons.map((label) => (
                <Button
                  key={label}
                  variant={activeComponent === label ? "outlined" : "text"} // Change variant based on active state
                  color="secondary"
                  size="small"
                  sx={{ minWidth: 0 }}
                  // onClick={() => handleClick(label)}
                  onClick={() => setActiveComponent(label)}
                >
                  {label}
                </Button>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Button color="primary" variant="text" size="small" onClick={ () => handleRedirect("signin") }>
              Sign in
            </Button>
            <Button color="primary" variant="text" size="small" onClick={ () => handleRedirect("signup") }>
              Sign up
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.primary' }}>
              <WhatshotIcon color={streak > 0 ? 'error' : 'inherit'} />
              <Typography variant="body2" fontWeight="bold">
                {streak}
              </Typography>
            </Box>
            <SearchAppBar />

            <ColorModeIconDropdown />
          </Box>
          
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
