// Minimal example without real AI API or Spotify API
const recommendBtn = document.getElementById('recommendBtn');
const moodInput = document.getElementById('moodInput');
const recommendations = document.getElementById('recommendations');

// Sample mood-to-songs map (replace this with AI / Spotify API later)
const moodSongs = {
  happy: ["Happy - Pharrell Williams", "Can't Stop the Feeling - Justin Timberlake", "Good Life - OneRepublic"],
  sad: ["Someone Like You - Adele", "Fix You - Coldplay", "Stay With Me - Sam Smith"],
  energetic: ["Eye of the Tiger - Survivor", "Don't Stop Me Now - Queen", "Stronger - Kanye West"],
  relaxed: ["Weightless - Marconi Union", "Sunset Lover - Petit Biscuit", "River Flows In You - Yiruma"]
};

recommendBtn.addEventListener('click', () => {
  const mood = moodInput.value.toLowerCase().trim();
  recommendations.innerHTML = '';

  if (!mood) {
    alert("Please enter your mood!");
    return;
  }

  let songs = [];

  // If exact mood exists
  if (moodSongs[mood]) {
    songs = moodSongs[mood];
  } else {
    // fallback: random 3 songs
    const allSongs = Object.values(moodSongs).flat();
    songs = allSongs.sort(() => 0.5 - Math.random()).slice(0, 3);
  }

  // Display songs
  songs.forEach(song => {
    const div = document.createElement('div');
    div.className = 'song';
    div.textContent = song;
    recommendations.appendChild(div);
  });
});