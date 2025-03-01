import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import LogoCollection from './components/LogoCollection';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { useState } from "react";

export default function LandingPage(props) {
  const [activeComponent, setActiveComponent] = useState("Hero");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Features":
        return <Features />;
      case "Pricing":
        return <Pricing />;
      case "FAQ":
        return <FAQ />;
      default:
        return <Hero />;
    }
  };

  console.log(renderComponent);
  return (
    // <AppTheme {...props}>
    //   <CssBaseline enableColorScheme />
    //   <AppAppBar />
    //   <Hero />
    //   <div>
    //     {/* <LogoCollection />
    //     <Features />
    //     <Divider />
    //     <Testimonials />
    //     <Divider />
    //     <Highlights />
    //     <Divider />
    //     <Pricing />
    //     <Divider />
    //     <FAQ /> */}
    //     <Divider />
    //     <Footer />
    //   </div>
    // </AppTheme>
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar setActiveComponent={setActiveComponent} />
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
