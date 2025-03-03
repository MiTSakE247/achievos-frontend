import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Container, Grid } from "@mui/material";
import ProfileHeader from "./ProfileHeader";
import BadgeCollage from "./BadgeCollage";
import AchievementStats from "./AchievementStats";
import EditProfileModal from "./EditProfileModal";
import { fetchProfile, fetchUserBadges, fetchUserBadgesByIssuer } from "./api"; // ✅ Import API call

export default function Profile() {
  const [user, setUser] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const router = useRouter();
  const [userBadges, setUserBadges] = useState([]);
  const [userGrantedBadges, setUserGrantedBadges] = useState([]);

  useEffect(() => {
    async function loadUserBadges() {
      const userGrantedBadgeData = await fetchUserBadgesByIssuer(router);
      if (userGrantedBadgeData) {
        setUserGrantedBadges(userGrantedBadgeData);
      }
    }
    loadUserBadges();
  }, [router]);


  useEffect(() => {
    async function loadUserBadges() {
      const userBadgeData = await fetchUserBadges(router);
      if (userBadgeData) {
        console.log("Fetched user badges:", userBadgeData);
        setUserBadges(userBadgeData);
      }
    }
    loadUserBadges();
  }, [router]);

  useEffect(() => {
    async function loadProfile() {
      const profileData = await fetchProfile(router);
      if (profileData) setUser(profileData);
    }
    loadProfile();
  }, [router]);

  if (!user) return <p>Loading profile...</p>;
  if (!userBadges) return <p>No badges received yet...</p>;
  if (!userGrantedBadges) return <p>No badges granted yet...</p>;

  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        minHeight: "100vh",
        pt: { xs: 14, sm: 20 },
        pb: { xs: 8, sm: 12 },
        backgroundRepeat: "no-repeat",
        backgroundImage: "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
        ...theme.applyStyles?.("dark", {
          backgroundImage: "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
        }),
      })}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <ProfileHeader user={user} onEdit={() => setEditOpen(true)} />
          </Grid>
          <Grid item xs={12}>
            <BadgeCollage userBadges={userBadges} userGrantedBadges={userGrantedBadges} />
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
