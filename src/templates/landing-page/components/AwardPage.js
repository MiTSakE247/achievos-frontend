import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Avatar,
  Card,
  CardContent,
  CardActions,
  Autocomplete,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  Award,
  ThumbsUp,
  Star,
  Trophy,
  Medal,
  Heart,
  Search,
  User,
  Send,
  Info,
} from "lucide-react";

// Mock data for users
const users = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    department: "Marketing",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    department: "Engineering",
  },
  {
    id: 3,
    name: "Jessica Williams",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    department: "Design",
  },
  {
    id: 4,
    name: "David Rodriguez",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    department: "Sales",
  },
  {
    id: 5,
    name: "Emma Thompson",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    department: "Customer Support",
  },
  {
    id: 6,
    name: "Alex Morgan",
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    department: "Engineering",
  },
  {
    id: 7,
    name: "Taylor Swift",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    department: "Marketing",
  },
  {
    id: 8,
    name: "John Smith",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    department: "Finance",
  },
];

// Mock data for badges
const badges = [
  {
    id: 1,
    name: "Team Player",
    description:
      "Recognizes exceptional collaboration and support for team members",
    icon: <ThumbsUp size={24} color="#1976d2" />,
  },
  {
    id: 2,
    name: "Problem Solver",
    description:
      "Awarded for finding creative solutions to difficult challenges",
    icon: <Star size={24} color="#ff9800" />,
  },
  {
    id: 3,
    name: "Innovation Award",
    description: "Celebrates creative thinking and innovative approaches",
    icon: <Award size={24} color="#9c27b0" />,
  },
  {
    id: 4,
    name: "Leadership",
    description: "Recognizes outstanding leadership qualities and initiative",
    icon: <Trophy size={24} color="#f44336" />,
  },
  {
    id: 5,
    name: "Excellence",
    description: "Awarded for consistently exceeding expectations",
    icon: <Medal size={24} color="#4caf50" />,
  },
  {
    id: 6,
    name: "Kindness",
    description: "Celebrates acts of kindness and compassion in the workplace",
    icon: <Heart size={24} color="#e91e63" />,
  },
];

// Departments for filtering
const departments = [
  "All",
  "Marketing",
  "Engineering",
  "Design",
  "Sales",
  "Customer Support",
  "Finance",
];

function AwardPage() {
  const [badges, setBadges] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedBadge, setSelectedBadge] = useState(null);
  const [message, setMessage] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [openBadgeDetails, setOpenBadgeDetails] = useState(false);
  const [badgeDetails, setBadgeDetails] = useState(null);
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [errorUsers, setErrorUsers] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`) // Replace with your API URL
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoadingUsers(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setErrorUsers("Failed to load users.");
        setLoadingUsers(false);
      });
  }, []);
  


  const handleOpenBadgeDetails = (badge) => {
    setBadgeDetails(badge);
    setOpenBadgeDetails(true);
  };

  const handleCloseBadgeDetails = () => {
    setOpenBadgeDetails(false);
    setBadgeDetails(null);
  };

   // Fetch badges from the backend
   useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/badges`) // Replace with your actual API URL
      .then((response) => response.json())
      .then((data) => setBadges(data))
      .catch((error) => console.error("Error fetching badges:", error));
  }, []);

  // Filter users based on search term and department
  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "All" || user.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setOpenDialog(true);
  };

  const handleBadgeSelect = (badge) => {
    setSelectedBadge(badge);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedBadge(null);
    setMessage("");
  };

  const handleAwardBadge = async () => {
    if (!selectedUser || !selectedBadge) {
      console.error("User or badge not selected");
      return;
    }
  
    const grantedBy = localStorage.getItem("id"); // Get the current user ID from localStorage
    if (!grantedBy) {
      console.error("No userId found in localStorage, redirect to signing page");
      return;
    }
    
    const payload = {
      badgeId: selectedBadge.badgeId,      // selected badge
      userId: selectedUser.userId,    // selected user
      grantedBy: parseInt(grantedBy), // current logged in user
      comments: message || null,       // message (optional)
    };
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/award-badge`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        throw new Error("Failed to award badge");
      }
  
      console.log("Badge awarded successfully!");
      console.log(response.text());
      setOpenSnackbar(true);
      setOpenDialog(false);
      setSelectedBadge(null);
      setMessage("");
  
    } catch (error) {
      console.error("Error awarding badge:", error);
    }
  };
  

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1, pt: 12, pb: 8 }}>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            mb: 2,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Award size={32} style={{ marginRight: 12 }} /> Award Badges
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Recognize your colleagues' achievements by awarding them badges.
          Select a user below to get started.
        </Typography>

        {/* Search and Filter Section */}
        <Paper elevation={2} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Search users..."
                value={searchTerm}
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: (
                    <Search
                      size={20}
                      style={{ marginRight: 8, color: "#666" }}
                    />
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="department-select-label">Department</InputLabel>
                <Select
                  labelId="department-select-label"
                  id="department-select"
                  value={selectedDepartment}
                  label="Department"
                  onChange={handleDepartmentChange}
                >
                  {departments.map((department) => (
                    <MenuItem key={department} value={department}>
                      {department}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>

        {/* Users Grid */}
        {loadingUsers ? (
          <Typography variant="body1" align="center">Loading users...</Typography>
        ) : errorUsers ? (
          <Typography variant="body1" color="error" align="center">{errorUsers}</Typography>
        ) : (
          <Grid container spacing={3}>
            {users.map((user) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={user.userId}>
                <Card
                  elevation={2}
                  sx={{
                    color: "text.primary",
                    height: "100%",
                    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", pt: 3 }}>
                    <Avatar
                      src={user.profilePic || "https://via.placeholder.com/80"} // Use default if profilePic is null
                      sx={{ width: 80, height: 80, mb: 2, border: "2px solid #e0e0e0" }}
                    />
                    <Typography variant="h6" component="div" align="center">
                      {user.name}
                    </Typography>
                    <Chip label={user.username} size="small" sx={{ mt: 1, mb: 2 }} />
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<Award size={16} />}
                      onClick={() => handleUserSelect(user)}
                    >
                      Award Badge
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Badge Selection Dialog */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Award size={24} style={{ marginRight: 8 }} />
              Award a Badge to {selectedUser?.name}
            </Box>
          </DialogTitle>
          <DialogContent dividers>
            <Typography variant="subtitle1" gutterBottom>
              Select a badge to award:
            </Typography>
            {/* <Grid container spacing={2} sx={{ mb: 3 }}>
              {badges.map((badge) => (
                <Grid item xs={12} sm={6} md={4} key={badge.id}>
                  <Paper
                    elevation={selectedBadge?.id === badge.id ? 3 : 1}
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      cursor: "pointer",
                      border:
                        selectedBadge?.id === badge.id
                          ? "2px solid #1976d2"
                          : "1px solid #e0e0e0",
                      borderRadius: 2,
                      transition: "all 0.2s ease-in-out",
                      "&:hover": {
                        borderColor: "#1976d2",
                        transform: "translateY(-2px)",
                      },
                    }}
                    onClick={() => handleBadgeSelect(badge)}
                  >
                    <Box sx={{ mb: 1 }}>{badge.icon}</Box>
                    <Typography variant="subtitle1" align="center" gutterBottom>
                      {badge.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      align="center"
                      color="text.secondary"
                    >
                      {badge.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid> */}
            {/* Display Badges Dynamically */}

            <Grid container spacing={2}>
              {badges.map((badge, index) => (
                <Grid item xs={12} sm={6} md={4} key={badge.badgeName || index}>
                  <Paper
                    elevation={selectedBadge?.badgeName === badge.badgeName ? 3 : 1}
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      cursor: "pointer",
                      border:
                        selectedBadge?.badgeName === badge.badgeName
                          ? "2px solid #1976d2"
                          : "1px solid #e0e0e0",
                      borderRadius: 2,
                      "&:hover": { borderColor: "#1976d2" },
                    }}
                    onClick={() => handleBadgeSelect(badge)}
                  >
                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                      <Avatar src={badge.badgeImg} sx={{ width: 50, height: 50, mb: 1 }} />
                      <Button onClick={(e) => { 
                          e.stopPropagation(); // Prevents triggering badge selection
                          handleOpenBadgeDetails(badge);
                        }} 
                        sx={{ minWidth: 0 }}
                      >
                        <Info size={20} color="#1976d2" />
                      </Button>
                    </Box>
                    <Typography variant="subtitle1" align="center">{badge.badgeName}</Typography>
                    <Typography variant="body2" align="center" color="text.secondary">
                      {badge.badgeDescription}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            {/* Badge Details Dialog */}
            <Dialog open={openBadgeDetails} onClose={handleCloseBadgeDetails} maxWidth="sm" fullWidth>
              <DialogTitle>Badge Details</DialogTitle>
              <DialogContent dividers>
                {badgeDetails && (
                  <Box sx={{ textAlign: "center" }}>
                    <Avatar src={badgeDetails.badgeImg} sx={{ width: 80, height: 80, mx: "auto", mb: 2 }} />
                    <Typography variant="h6">{badgeDetails.badgeName}</Typography>
                    <Typography color="text.secondary">{badgeDetails.badgeDescription}</Typography>
                    <Typography sx={{ mt: 2 }}>XP: {badgeDetails.badgeXp}</Typography>
                    <Typography>Tier: {badgeDetails.badgeTier}</Typography>
                    <Typography>Category: {badgeDetails.badgeCategory}</Typography>
                  </Box>
                )}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseBadgeDetails}>Close</Button>
              </DialogActions>
            </Dialog>

            <TextField
              fullWidth
              label="Add a personal message (optional)"
              rows={4}
              sx={{ pt: 1.2 }}
              value={message}
              onChange={handleMessageChange}
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button
              onClick={handleAwardBadge}
              variant="contained"
              color="inherit"
              disabled={!selectedBadge}
              startIcon={<Send size={16} />}
            >
              Award Badge
            </Button>
          </DialogActions>
        </Dialog>

        {/* Success Snackbar */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: "100%" }}
          >
            Badge successfully awarded to {selectedUser?.name}!
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}

export default AwardPage;
