import React, { useState, useEffect } from "react";
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

// Mock badges data - replace with actual data fetching
const mockBadges = [
  {
    badge_id: "badge1",
    name: "Early Adopter",
    description: "Joined during the beta phase",
    // icon_url: "https://images.unsplash.com/photo-1533578662531-d20a2a2f5b22?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    icon_url: "https://plus.unsplash.com/premium_photo-1687203673190-d39c3719123a?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tier: "gold",
    category: "membership",
    earned_at: "2023-01-20T00:00:00Z",
    status: "active"
  },
  {
    badge_id: "badge2",
    name: "Bug Hunter",
    description: "Found and reported 5 bugs",
    icon_url: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    tier: "silver",
    category: "contribution",
    earned_at: "2023-02-15T00:00:00Z",
    status: "active"
  },
  {
    badge_id: "badge3",
    name: "Streak Master",
    description: "Maintained a 10-day streak",
    // icon_url: "https://images.unsplash.com/photo-1565514020179-026b92b2d70b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    icon_url: "https://images.unsplash.com/photo-1615842788685-40678531fa40?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tier: "bronze",
    category: "engagement",
    earned_at: "2023-03-10T00:00:00Z",
    status: "active"
  },
  {
    badge_id: "badge4",
    name: "Code Reviewer",
    description: "Reviewed 20 pull requests",
    icon_url: "https://images.unsplash.com/photo-1562907550-096d3bf9b25c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    tier: "silver",
    category: "contribution",
    earned_at: "2023-04-05T00:00:00Z",
    status: "active"
  },
  {
    badge_id: "badge5",
    name: "Documentation Hero",
    description: "Contributed to documentation",
    icon_url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    tier: "bronze",
    category: "contribution",
    earned_at: "2023-05-20T00:00:00Z",
    status: "active"
  },
  
  {
    badge_id: "badge60",
    name: "Documentation Hero",
    description: "Contributed to documentation",
    icon_url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    tier: "bronze",
    category: "contribution",
    earned_at: "2023-05-20T00:00:00Z",
    status: "active"
  },
  
  {
    badge_id: "badge61",
    name: "Documentation Hero",
    description: "Contributed to documentation",
    icon_url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    tier: "bronze",
    category: "contribution",
    earned_at: "2023-05-20T00:00:00Z",
    status: "active"
  }
];

// Styled Components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.8)`
    : alpha(theme.palette.background.default, 0.8),
  backdropFilter: 'blur(8px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
}));

const AchievementStats = () => (
  <StyledPaper elevation={0}>
    <Typography variant="h5" component="h2" gutterBottom>
      Achievement Stats
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" color="primary.main">{mockBadges.length}</Typography>
          <Typography variant="body2" color="text.secondary">Total Badges</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" color="primary.main">3</Typography>
          <Typography variant="body2" color="text.secondary">Gold Badges</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" color="primary.main">85%</Typography>
          <Typography variant="body2" color="text.secondary">Completion Rate</Typography>
        </Box>
      </Grid>
    </Grid>
  </StyledPaper>
);

export default AchievementStats;