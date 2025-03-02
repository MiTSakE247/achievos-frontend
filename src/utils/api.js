const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
console.log("API_BASE_URL: " + API_BASE_URL);

// ✅ Sign In Request
export async function signIn(userEmail, passwordHash) {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userEmail, passwordHash }),
  });

  if (!response.ok) throw new Error("Invalid login credentials");
  return response.text(); // Returns user data & token
}

// ✅ Sign Up Request
export async function signUp(name, userEmail, passwordHash) {
  const response = await fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, userEmail, passwordHash }),
  });

  if (!response.ok) throw new Error("Sign-up failed");
  return response.text();
}

// ✅ Fetch User Profile
export async function getProfile(token) {
  const response = await fetch(`${API_BASE_URL}/users`, {
    method: "GET",
    headers: { "Authorization": `Bearer ${token}` },
  });

  if (!response.ok) throw new Error("Failed to fetch profile");
  return response.json();
}
