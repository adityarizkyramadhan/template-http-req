const url = "https://clips.id/api/auth/login";
const token = "your_token_here";
const data = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer " + token
  },
  body: JSON.stringify({
    email: "your_email_here",
    password: "your_password_here"
  })
};

const postMethod = async () => {
  try {
    const response = await fetch(url, data);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
};

postMethod();
