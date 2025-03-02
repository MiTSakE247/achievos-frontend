import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { Award } from "lucide-react";

function RecentBadges({ recentBadges }) {
  return (
    <Box sx={{ maxHeight: 400, overflow: "auto" }}>
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
        <Award size={24} style={{ marginRight: 8 }} /> Recent Badge Awards
      </Typography>
      {recentBadges.map((item) => (
        <Box key={item.id}>
          <Box sx={{ display: "flex", alignItems: "center", py: 1.5 }}>
            <Box sx={{ mr: 2 }}>{item.icon}</Box>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body1" fontWeight="medium">
                {item.recipient} received <strong>{item.badge}</strong>
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {item.time}
              </Typography>
            </Box>
          </Box>
          {item.id !== recentBadges.length && <Divider />}
        </Box>
      ))}
    </Box>
  );
}

export default RecentBadges;
