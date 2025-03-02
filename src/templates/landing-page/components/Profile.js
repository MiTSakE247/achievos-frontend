import React, { useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Badge as MuiBadge } from '@mui/material';

// Mock user data (Replace with actual API fetch)
const mockUser = {
  name: "Jane Doe",
  username: "janedoe",
  user_email: "jane@example.com",
  profile_pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  bio: "Software developer passionate about meaningful applications.",
  level: 7,
  streak: 12,
  joined_at: "2023-01-15T00:00:00Z"
};

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

const StyledModal = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper", // ✅ Clear, non-transparent background
  boxShadow: 24, // ✅ Improved visibility
  p: 4,
  borderRadius: 2,
  outline: "none", // ✅ Removes default browser outline
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

const ProfileHeader = ({ user, onEdit }) => (
  <StyledPaper elevation={0}>
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar
          src={user.profile_pic}
          alt={user.name}
          sx={{ 
            width: { xs: 120, md: 150 }, 
            height: { xs: 120, md: 150 },
            border: '4px solid',
            borderColor: 'primary.main',
          }}
        />
      </Grid>
      <Grid item xs={12} md={9}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Typography variant="h4" component="h1" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              @{user.username}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <Chip 
                icon={<EmojiEventsIcon />} 
                label={`Level ${user.level}`} 
                color="primary" 
                variant="outlined" 
              />
              <Chip 
                icon={<WhatshotIcon />} 
                label={`${user.streak} day streak`} 
                color="error" 
                variant="outlined" 
              />
            </Box>
          </Box>
          <Button variant="outlined" startIcon={<EditIcon />} onClick={onEdit}>
            Edit Profile
          </Button>
        </Box>
        <Typography variant="body1">
          {user.bio}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Joined {new Date(user.joined_at).toLocaleDateString()}
        </Typography>
      </Grid>
    </Grid>
  </StyledPaper>
);

const EditProfileModal = ({ open, handleClose, user, setUser }) => {
  const [formData, setFormData] = React.useState(user);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSave = () => {
    setUser(formData);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 400, bgcolor: 'background.paper', p: 4, borderRadius: 2, boxShadow: 24
      }}>
        <Typography variant="h6">Edit Profile</Typography>
        <TextField
          fullWidth margin="normal" label="Full Name" name="name"
          value={formData.name} onChange={handleChange}
        />
        <TextField
          fullWidth margin="normal" label="Bio" name="bio" multiline rows={3}
          value={formData.bio} onChange={handleChange}
        />
        <TextField
          fullWidth margin="normal" label="Profile Picture URL" name="profile_pic"
          value={formData.profile_pic} onChange={handleChange}
        />
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="outlined" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
        </Box>
      </Box>
    </Modal>
  );
};

const getRandomIcon = () => {
  const icons = ["🎖️", "⭐", "🌟", "🏅"];
  return icons[Math.floor(Math.random() * icons.length)];
};

const BadgeCollage = ({ badges }) => {
  const [showAll, setShowAll] = useState(false);
  const icon = getRandomIcon(); // ✅ Generates a random icon when component renders

  // ✅ Show limited badges if `showAll` is false
  const displayedBadges = showAll ? badges : badges.slice(0, 5);

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
        {displayedBadges.map((badge) => (
          <Grid item xs={6} sm={4} md={2.4} key={badge.badge_id}>
            <BadgeItem tier={badge.tier}>
              <MuiBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  badge.tier === "gold" ? "🥇" : badge.tier === "silver" ? "🥈" : "🥉"
                }
              >
                <Avatar
                  src={badge.icon_url}
                  alt={badge.name}
                  sx={{
                    width: 80,
                    height: 80,
                    mb: 1,
                    border: "2px solid",
                    borderColor:
                      badge.tier === "gold"
                        ? "warning.main"
                        : badge.tier === "silver"
                        ? "grey.400"
                        : "brown.main",
                  }}
                />
              </MuiBadge>
              <Typography variant="subtitle2" align="center">
                {badge.name}
              </Typography>
              <Typography variant="caption" align="center" color="text.secondary">
                {badge.category}
              </Typography>
            </BadgeItem>
          </Grid>
        ))}
      </Grid>
    </StyledPaper>
  );
};


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

export default function Profile() {
  const [user, setUser] = React.useState(mockUser);
  const [editOpen, setEditOpen] = React.useState(false);

  return (
    <Box
      sx={(theme) => ({
        width: '100%',
        minHeight: '100vh',
        pt: { xs: 14, sm: 20 },
        pb: { xs: 8, sm: 12 },
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles?.('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <ProfileHeader user={user} onEdit={() => setEditOpen(true)} />
          </Grid>
          <Grid item xs={12}>
            <BadgeCollage badges={mockBadges} />
          </Grid>
          <Grid item xs={12}>
            <AchievementStats />
          </Grid>
        </Grid>
      </Container>

      <EditProfileModal open={editOpen} handleClose={() => setEditOpen(false)} user={user} setUser={setUser} />
    </Box>
  );
}
