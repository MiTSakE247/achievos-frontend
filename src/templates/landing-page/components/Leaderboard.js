import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { Trophy } from "lucide-react";

function Leaderboard({ leaderboardData }) {
  return (
    <Box>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          mb: 3,
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Trophy size={24} style={{ marginRight: 8 }} /> Top Leaders
      </Typography>
      {leaderboardData.map((user) => (
        <Box
          key={user.id}
          sx={{ display: "flex", alignItems: "center", py: 2 }}
        >
          <Avatar
            src={user.avatar}
            alt={user.name}
            sx={{ width: 48, height: 48, mr: 2 }}
          />
          <Typography variant="body1">{user.name}</Typography>
          <Typography variant="body2" sx={{ ml: "auto", fontWeight: "bold" }}>
            {user.badges} Badges
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default Leaderboard;
