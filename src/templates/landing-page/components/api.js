export async function fetchProfile(router) {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const userEmail = localStorage.getItem("userEmail");
  const passwordHash = localStorage.getItem("passwordHash");

  if (!userEmail || !passwordHash) {
    console.error("Missing credentials in localStorage");
    router.push("/authenticate");
    return null;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/users/id`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userEmail, passwordHash }),
    });

    const responseText = await response.text();
    console.log("API Response:", responseText);

    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch {
      responseData = { message: responseText };
    }

    if (!response.ok) throw new Error(responseData.message || "Failed to fetch profile");

    return responseData;
  } catch (error) {
    console.error("Profile fetch failed:", error);
    router.push("/authenticate");
    return null;
  }
}

export async function updateProfile(formData) {
  try {
    const id = localStorage.getItem("id");
    if (!id) {
      throw new Error("Missing user ID in localStorage");
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to update profile");
    }

    return await response.text(); // ✅ Return updated user data
  } catch (error) {
    console.error("Profile update failed:", error);
    throw error; // ✅ Let the caller handle the error
  }
}
