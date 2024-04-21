const url = "https://clips.id/github-adit";
const token = "your_token_here";

const data = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer " + token,
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
  }
};

const getMethod = async () => {
  try {
    const response = await fetch(url, data);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

getMethod();
