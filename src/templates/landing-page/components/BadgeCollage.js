import React, { useState, useEffect } from "react";
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Badge as MuiBadge } from '@mui/material';
import { fetchBadge } from "./api"; // ✅ Import API call

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

const BadgeItem = styled(Paper)(({ theme, tier }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.6)`
    : alpha(theme.palette.background.default, 0.6),
  backdropFilter: 'blur(4px)',
  border: '1px solid',
  borderColor: tier === 'gold' 
    ? theme.palette.warning.main 
    : tier === 'silver' 
      ? theme.palette.grey[400] 
      : theme.palette.brown ? theme.palette.brown.main : '#cd7f32',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));


const getRandomIcon = () => {
  const icons = ["🎖️", "⭐", "🌟", "🏅"];
  return icons[Math.floor(Math.random() * icons.length)];
};

const BadgeCollage = ({ userBadges, userGrantedBadges }) => {
  console.log("USER BADGES:", userBadges);
  const [showAll, setShowAll] = useState(false);
  const [showGrantedAll, setShowGrantedAll] = useState(false);
  const icon = getRandomIcon(); // ✅ Generates a random icon when component renders
  const [badges, setBadges] = useState([]);
  const [badgesGranted, setBadgesGranted] = useState([]);

  useEffect(() => {
    async function loadBadges() {
      // write a code here to fetch user badges by traversing userBadges array and calling fetchBadge function and passing the badge id
      if (!userBadges || userBadges.length === 0) return;
      try {
        const badgePromises = userBadges.map((transaction) => fetchBadge(transaction.badgeId));
        const badgeData = await Promise.all(badgePromises);
        console.log("Fetched badges:", badgeData);
        setBadges(badgeData);
        console.log("After badges is set:", badges);
      } catch (error) {
        console.error("Error fetching badges:", error);
      }
    }
    loadBadges();
  }, [userBadges]);

  useEffect(() => {
    async function loadBadges() {
      if (!userGrantedBadges || userGrantedBadges.length === 0) return;
      try {
        const badgePromises = userGrantedBadges.map((transaction) => fetchBadge(transaction.badgeId));
        const badgeData = await Promise.all(badgePromises);
        console.log("Fetched badges:", badgeData);
        setBadgesGranted(badgeData);
        console.log("After badges is set:", badges);
      } catch (error) {
        console.error("Error fetching badges:", error);
      }
    }
    loadBadges();
  }, [userGrantedBadges]);

  // ✅ Show limited badges if `showAll` is false
  const displayedBadges = showAll ? badges : badges.slice(0, 5);
  const displayedGrantedBadges = showGrantedAll ? badgesGranted : badgesGranted.slice(0, 5);

  return (
    <StyledPaper elevation={0}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h5" component="h2">
          {`${icon} Earned Badges ${icon}`}
        </Typography>
        <Button
          variant="text"
          color="primary"
          size="small"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All"}
        </Button>
      </Box>
      <Grid container spacing={2}>
        {displayedBadges.map((badge) => {
          console.log("Badge:", badge);
          return (
            <Grid item xs={6} sm={4} md={2.4} key={badge.badgeId}>
              <BadgeItem tier={badge.badgeTier}>
                <MuiBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  badgeContent={
                    badge.badgeTier === "GOLD" ? "🥇" : badge.tier === "SILVER" ? "🥈" : "🥉"
                  }
                >
                  <Avatar
                    src={badge.badgeImg}
                    alt={badge.badgeName}
                    sx={{
                      width: 80,
                      height: 80,
                      mb: 1,
                      border: "2px solid",
                      borderColor:
                        badge.badgeTier === "GOLD"
                          ? "warning.main"
                          : badge.badgeTier === "SILVER"
                          ? "grey.400"
                          : "brown.main",
                    }}
                  />
                </MuiBadge>
                <Typography variant="subtitle2" align="center">
                  {badge.badgeName}
                </Typography>
                <Typography variant="caption" align="center" color="text.secondary">
                  {badge.badgeCategory}
                </Typography>
              </BadgeItem>
            </Grid>
          )
        }
        )}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h5" component="h2">
          {`${icon} Issued Badges ${icon}`}
        </Typography>
        <Button
          variant="text"
          color="primary"
          size="small"
          onClick={() => setShowGrantedAll(!showGrantedAll)}
        >
          {showAll ? "Show Less" : "View All"}
        </Button>
      </Box>
      <Grid container spacing={2}>
        {displayedGrantedBadges.map((badge) => {
          console.log("Badge:", badge);
          return (
            <Grid item xs={6} sm={4} md={2.4} key={badge.badgeId}>
              <BadgeItem tier={badge.badgeTier}>
                <MuiBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  badgeContent={
                    badge.badgeTier === "GOLD" ? "🥇" : badge.tier === "SILVER" ? "🥈" : "🥉"
                  }
                >
                  <Avatar
                    src={badge.badgeImg}
                    alt={badge.badgeName}
                    sx={{
                      width: 80,
                      height: 80,
                      mb: 1,
                      border: "2px solid",
                      borderColor:
                        badge.badgeTier === "GOLD"
                          ? "warning.main"
                          : badge.badgeTier === "SILVER"
                          ? "grey.400"
                          : "brown.main",
                    }}
                  />
                </MuiBadge>
                <Typography variant="subtitle2" align="center">
                  {badge.badgeName}
                </Typography>
                <Typography variant="caption" align="center" color="text.secondary">
                  {badge.badgeCategory}
                </Typography>
              </BadgeItem>
            </Grid>
          )
        }
        )}
      </Grid>
    </StyledPaper>
  );
};

export default BadgeCollage;