"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Stack } from "@mui/material";
import SignUpSide from "@templates/sign-up-side/SignUpSide";
import SignInSide from "@templates/sign-in-side/SignInSide";

export default function AuthPage() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode"); // ✅ Read query param
  const [isSignUp, setIsSignUp] = useState(mode === "signup"); // ✅ Set initial state

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{ minHeight: "100vh", alignItems: "center", justifyContent: "center" }}
    >
      {isSignUp ? <SignUpSide setIsSignUp={setIsSignUp} /> : <SignInSide setIsSignUp={setIsSignUp} />}
    </Stack>
  );
}

// "use client";

// import Authenticate from "./authenticate";

// export default function AuthPage({ searchParams }) {
//   const isSignUp = searchParams?.mode === "signup"; // ✅ Read mode from searchParams

//   return <Authenticate isSignUp={isSignUp} />;
// }
