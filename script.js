// Minimal example without real AI API or Spotify API
const recommendBtn = document.getElementById('recommendBtn');
const moodInput = document.getElementById('moodInput');
const recommendations = document.getElementById('recommendations');

// Sample mood-to-songs map (replace this with AI / Spotify API later)
const moodSongs = {
  happy: [
    "Mala Jau Dya Na Ghari - Ajay–Atul", 
    "Zingaat - Ajay–Atul", 
    "Badtameez Dil - Yeh Jawaani Hai Deewani", 
    "Kar Gayi Chull - Kapoor & Sons", 
    "Happy - Pharrell Williams"
  ],
  sad: [
    "Sukh Mhanje Nakki Kay Asta - Ajay–Atul", 
    "Mannat Lagu - Swapnil Bandodkar", 
    "Channa Mereya - Ae Dil Hai Mushkil", 
    "Tujhe Kitna Chahne Lage - Kabir Singh", 
    "Someone Like You - Adele"
  ],
  energetic: [
    "Dhagala Lagli Kala - Ajay–Atul", 
    "Deva Tujhya Gabharyala - Ajay–Atul", 
    "Zinda - Bhaag Milkha Bhaag", 
    "Jai Ho - Slumdog Millionaire", 
    "Don't Stop Me Now - Queen"
  ],
  relaxed: [
    "Hi Chaal Turu Turu - Ajay–Atul", 
    "Jeev Rangla - Ajay–Atul", 
    "Kabira - Yeh Jawaani Hai Deewani", 
    "Raabta - Agent Vinod", 
    "River Flows In You - Yiruma"
  ],
  angry: [
    "Kombdi Palali - Ajay–Atul", 
    "Wajle Ki Bara - Ajay–Atul", 
    "Bulleya - Ae Dil Hai Mushkil", 
    "Malang - Malang", 
    "Eye of the Tiger - Survivor"
  ],
  confused: [
    "Mann Udhan Varyache - Ajay–Atul",
    "Bhungroo - Ajay–Atul",
    "Agar Tum Saath Ho - Tamasha",
    "Kal Ho Naa Ho - Title Track",
    "Lost - Coldplay"
  ],
  excited: [
    "Apsara Aali - Ajay–Atul",
    "Ye Jo Des Hai Tera - Swades",
    "Gallan Goodiyaan - Dil Dhadakne Do",
    "Balam Pichkari - Yeh Jawaani Hai Deewani",
    "Uptown Funk - Mark Ronson ft. Bruno Mars"
  ],
  curious: [
    "Sairat Zaala Ji - Ajay–Atul",
    "Katyar Kaljat Ghusali - Title Song",
    "Dil Dhadakne Do - Title Track",
    "Tum Hi Ho - Aashiqui 2",
    "Adventure of a Lifetime - Coldplay"
  ],
  surprised: [
    "Mala Ved Lagale - Ajay–Atul",
    "Kiti Sangaychay Mala - Ajay–Atul",
    "Jai Ho - Slumdog Millionaire",
    "Ghungroo - War",
    "Happy Now - Kygo"
  ]
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
