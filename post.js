const url = "https://clips.id/api/auth/login";
const token = "your_token_here";
const data = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer " + token,
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
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
