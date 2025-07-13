function displayLyrics(response) {
  let output = document.getElementById("output");
  let lyrics = response.data.answer;

  // Clear previous content
  output.innerHTML = "";

  // Typewriter animation
  new Typewriter("#output", {
    autoStart: true,
    delay: 15,
    cursor: "",
    loop: false,
  })
    .typeString(lyrics)
    .start();
}

function generateLyrics(event) {
  event.preventDefault();

  let genre = document.getElementById("genre").value;
  let theme = document.getElementById("theme").value.trim();

  if (!theme) {
    alert("Please enter a theme.");
    return;
  }

  let apiKey = "bc892e6f8cb423o2f786c3ctf8a06c3a";
  let context = `Genre: ${genre}, Theme: ${theme}`;
  let instructions = `Write a short original song based on this genre and theme. Include 1 verses and a chorus.the song should be short and not more that 8 lines please sign SheCodes AI at the end using a <strong> element.`;

  let prompt = `Generate a song based on the context: ${context}. ${instructions}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  //  loading text
  document.getElementById("output").textContent = "🎵 Generating lyrics...";

  axios.get(apiUrl).then(displayLyrics);
}

document
  .getElementById("lyrics-form")
  .addEventListener("submit", generateLyrics);
