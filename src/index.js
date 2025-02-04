const youtubeTranscript = require("youtube-transcript-api");

const videoId = "AbDT2JTSnA8";

async function fetchYouTubeTranscription(videoId) {
  try {
    // Fetch the transcript
    const transcript = await youtubeTranscript.getTranscript(videoId);

    // Print the transcript
    console.log("Transcript fetched successfully!\n");
    transcript.forEach((item) => {
      console.log(`[${item.start}] ${item.text}`);
    });
  } catch (error) {
    console.error("Error fetching transcript:", error.message);
  }
}

fetchYouTubeTranscription(videoId);
