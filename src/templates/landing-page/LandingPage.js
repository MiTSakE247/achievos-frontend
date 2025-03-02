import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import AppTheme from '../shared-theme/AppTheme';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import LogoCollection from './components/LogoCollection';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Profile from './components/Profile';
import { useState } from "react";

export default function LandingPage(props) {
  const [activeComponent, setActiveComponent] = useState("Hero");

  // Current Navigation ["Dashboard", "Profile", "Awards", "FAQ", "Blog"];
  const renderComponent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <Features />;
      case "Profile":
        return <Profile />;
      case "FAQ":
        return <FAQ />;
      default:
        return <Hero />;
    }
  };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <NavBar setActiveComponent={setActiveComponent} activeComponent={activeComponent}/>
      <Box
        sx={(theme) => ({
          width: "100%",
          minHeight: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",

          // Dark Mode Background Fix
          ...theme.applyStyles?.("dark", {
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
          }),
        })}
      >
        {renderComponent()}
        <Divider />
        <Footer />
      </Box>
    </AppTheme>
  );
}
