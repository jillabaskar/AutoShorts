
async function analyzeChannel() {
  const input = document.getElementById("channelUrl");
  const status = document.getElementById("status");

  const url = input.value.trim();

  if (!url) {
    status.textContent = "Please paste a YouTube channel link.";
    return;
  }

  if (!url.includes("youtube.com")) {
    status.textContent = "Invalid YouTube link!";
    return;
  }

  status.textContent = "Channel link accepted! Preparing analysis...";

  let channelName = "YouTube Channel";

  if (url.includes("@")) {
    channelName = url.split("@")[1].split("/")[0];
  }

  status.textContent =
    "Channel detected: " + channelName +
    " | AI Analysis engine not connected yet.";
}
