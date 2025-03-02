"use client";

import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button, CircularProgress } from "@mui/material";
import { updateProfile } from "./api"; // ✅ Import API function

const EditProfileModal = ({ open, handleClose, user, setUser }) => {
  const [formData, setFormData] = useState(user);
  const [uploading, setUploading] = useState(false); // ✅ Upload state

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const FLASK_API_URL = "http://localhost:5000/upload"; // ✅ Your Flask API endpoint

  const handleImageUpload = async (event) => {
    console.log("UPLOADING IMAGE...");
    const file = event.target.files[0];
    if (!file) return;
  
    const formData = new FormData();
    formData.append("file", file);
  
    setUploading(true);
    try {
      const response = await fetch(FLASK_API_URL, {
        method: "POST",
        body: formData,
      });
  
      console.log("Raw Response:", response); // ✅ Log raw response
  
      const result = await response.json();
      console.log("Parsed Response:", result); // ✅ Log parsed response
  
      if (!result.url) {
        throw new Error(`Upload failed: ${JSON.stringify(result)}`); // ✅ Log API error message
      }
  
      // ✅ Set profile pic URL in formData
      setFormData((prev) => ({ ...prev, profile_pic: result.imageUrl }));
      alert("Image uploaded successfully!");
      handleClose();
    } catch (error) {
      console.error("Image upload failed:", error);
      alert(`Image upload failed: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };
  
  

  const handleSave = async () => {
    try {
      const updatedUser = await updateProfile(formData); // ✅ Call API to update profile
      setUser(updatedUser); // ✅ Update profile state immediately
      alert("Profile updated successfully!");
      handleClose();
    } catch (error) {
      alert("Profile update failed. Please try again.");
    }
  };
  

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 420,
          p: 4,
          bgcolor: "background.paper",
          borderRadius: 3,
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold" textAlign="center">
          Edit Profile
        </Typography>

        <TextField fullWidth label="Full Name" name="name" value={formData.name} onChange={handleChange} />
        <TextField fullWidth label="Username" name="username" value={formData.username} onChange={handleChange} />
        <TextField fullWidth label="Email" name="user_email" value={formData.user_email} onChange={handleChange} />
        <TextField
          fullWidth
          label="Bio"
          name="bio"
          multiline
          rows={4}
          placeholder="Tell us something about yourself..."
          value={formData.bio}
          onChange={handleChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "rgba(0, 0, 0, 0.05)",
              borderRadius: 2,
            },
          }}
        />

        {/* ✅ Image Upload Input */}
        <Button variant="outlined" component="label">
          Upload Profile Picture
          <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
        </Button>

        {/* ✅ Show Loading Indicator During Upload */}
        {uploading && <CircularProgress size={24} sx={{ alignSelf: "center" }} />}

        {/* ✅ Display Uploaded Image URL */}
        <TextField fullWidth label="Profile Picture URL" name="profile_pic" value={formData.profile_pic} onChange={handleChange} />

        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 2 }}>
          <Button variant="outlined" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSave} disabled={uploading}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditProfileModal;
