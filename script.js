
async function analyzeChannel() {
  const input = document.getElementById("channelUrl");
  const status = document.getElementById("status");

  const url = input.value.trim();

  if (!url) {
    status.textContent = "Please paste a YouTube channel link first.";
    return;
  }

  if (!url.includes("youtube.com")) {
    status.textContent = "Please enter a valid YouTube channel URL.";
    return;
  }

  status.textContent = "Channel link received! Analysis engine is coming soon.";

  console.log("Channel URL:", url);
}
