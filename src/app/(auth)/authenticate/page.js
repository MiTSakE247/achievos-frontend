"use client";

import React, { useState } from "react";
import { Stack } from "@mui/material";
import SignUpSide from "@templates/sign-up-side/SignUpSide";
import SignInSide from "@templates/sign-in-side/SignInSide";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{ minHeight: "100vh", alignItems: "center", justifyContent: "center" }}
    >
      {isSignUp ? <SignUpSide setIsSignUp={setIsSignUp} /> : <SignInSide setIsSignUp={setIsSignUp} />}
    </Stack>
  );
}
