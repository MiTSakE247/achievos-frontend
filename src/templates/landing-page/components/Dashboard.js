import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { Award, Trophy, Star, Medal, ThumbsUp, Heart } from "lucide-react";
import AchievementCard from "./AchievementCard";
import RecentBadges from "./RecentBadges";
import Leaderboard from "./Leaderboard";

// Mock data for achievements
const achievements = [
  {
    id: 1,
    title: "Team Player",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    icon: <ThumbsUp size={24} color="#1976d2" />,
  },
  {
    id: 2,
    title: "Problem Solver",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    icon: <Star size={24} color="#ff9800" />,
  },
  {
    id: 3,
    title: "Innovation Award",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    icon: <Award size={24} color="#9c27b0" />,
  },
  {
    id: 4,
    title: "Leadership",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    icon: <Trophy size={24} color="#f44336" />,
  },
  {
    id: 5,
    title: "Excellence",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    icon: <Medal size={24} color="#4caf50" />,
  },
  {
    id: 6,
    title: "Kindness",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    icon: <Heart size={24} color="#e91e63" />,
  },
];

// Mock data for leaderboard
const leaderboardData = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    badges: 42,
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    badges: 38,
  },
  {
    id: 3,
    name: "Jessica Williams",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    badges: 35,
  },
  {
    id: 4,
    name: "David Rodriguez",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    badges: 31,
  },
  {
    id: 5,
    name: "Emma Thompson",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    badges: 29,
  },
];

// Mock data for recent badges
const recentBadges = [
  {
    id: 1,
    recipient: "Alex Morgan",
    badge: "Team Player",
    time: "2 hours ago",
    icon: <ThumbsUp size={16} color="#1976d2" />,
  },
  {
    id: 2,
    recipient: "Taylor Swift",
    badge: "Innovation Award",
    time: "4 hours ago",
    icon: <Award size={16} color="#9c27b0" />,
  },
  {
    id: 3,
    recipient: "John Smith",
    badge: "Problem Solver",
    time: "6 hours ago",
    icon: <Star size={16} color="#ff9800" />,
  },
  {
    id: 4,
    recipient: "Lisa Johnson",
    badge: "Leadership",
    time: "1 day ago",
    icon: <Trophy size={16} color="#f44336" />,
  },
  {
    id: 5,
    recipient: "Robert Chen",
    badge: "Excellence",
    time: "1 day ago",
    icon: <Medal size={16} color="#4caf50" />,
  },
  {
    id: 6,
    recipient: "Maria Garcia",
    badge: "Kindness",
    time: "2 days ago",
    icon: <Heart size={16} color="#e91e63" />,
  },
  {
    id: 7,
    recipient: "James Wilson",
    badge: "Team Player",
    time: "2 days ago",
    icon: <ThumbsUp size={16} color="#1976d2" />,
  },
  {
    id: 8,
    recipient: "Patricia Lee",
    badge: "Problem Solver",
    time: "3 days ago",
    icon: <Star size={16} color="#ff9800" />,
  },
];

function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1, pt: 12, pb: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ mb: 8, marginTop: 1 }}>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2} sx={{ height: "100%" }}>
              {achievements.slice(0, 2).map((achievement) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ height: { xs: 200, md: 250 } }}
                  key={achievement.id}
                >
                  <AchievementCard achievement={achievement} />
                </Grid>
              ))}
              {/* Special handling for id: 3 */}
              <Grid
                item
                xs={12}
                md={12} // Ensure it spans 2 columns on large screens
                sx={{ height: { xs: 200, md: 250 } }}
              >
                <AchievementCard achievement={achievements[2]} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={2} sx={{ height: "100%" }}>
              <Grid item xs={12} sx={{ height: { xs: 200, md: 500 } }}>
                <AchievementCard achievement={achievements[3]} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <RecentBadges recentBadges={recentBadges} />
          </Grid>
          <Grid item xs={12} md={5}>
            <Leaderboard leaderboardData={leaderboardData} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Dashboard;
