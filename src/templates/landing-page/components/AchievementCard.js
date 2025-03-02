import React from "react";
import { Box, Paper, Typography } from "@mui/material";

function AchievementCard({ achievement }) {
  return (
    <Paper
      elevation={2}
      sx={{
        height: "100%",
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      <Box
        sx={{
          height: "100%",
          backgroundImage: `url(${achievement.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            p: 2,
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {achievement.icon}
          <Typography variant="h6" color="white" fontWeight="bold">
            {achievement.title}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default AchievementCard;
