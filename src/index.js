function generateLyrics(event) {
  event.preventDefault();

  let lyrics = `I walked the lonely road again  
Searching for a place to mend  
The night was cold, my heart was too  
But I still sang this song for you  

🎤 Repeat this chorus loud and true  
Freedom, love — I'm breaking through`;

  new Typewriter("#output", {
    strings: [lyrics],
    autoStart: true,
    delay: 30,
    cursor: "",
    loop: false,
  });
}

let lyricFormElement = document.getElementById("lyrics-form");
lyricFormElement.addEventListener("submit", generateLyrics);
