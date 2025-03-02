import React from "react";
import { Box, Grid, Avatar, Typography, Paper, Button, Chip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WhatshotIcon from "@mui/icons-material/Whatshot";

const ProfileHeader = ({ user, onEdit }) => (
  <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: "center" }}>
        <Avatar src={user.profilePic} alt={user.name} sx={{ width: 150, height: 150, border: "4px solid", borderColor: "primary.main" }} />
      </Grid>
      <Grid item xs={12} md={9}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <Box>
            <Typography variant="h4">{user.name}</Typography>
            <Typography variant="subtitle1" color="text.secondary">@{user.username}</Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              <Chip icon={<EmojiEventsIcon />} label={`Level ${user.level}`} color="primary" variant="outlined" />
              <Chip icon={<WhatshotIcon />} label={`${user.streak} day streak`} color="error" variant="outlined" />
            </Box>
          </Box>
          <Button variant="outlined" startIcon={<EditIcon />} onClick={onEdit}>Edit Profile</Button>
        </Box>
        <Typography variant="body1" mt={2}>{user.bio}</Typography>
      </Grid>
    </Grid>
  </Paper>
);

export default ProfileHeader;
