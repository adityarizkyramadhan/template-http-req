const url = "https://clips.id/github-adit";
const token = "your_token_here";

const data = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer " + token
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
