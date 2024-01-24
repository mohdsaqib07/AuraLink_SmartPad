// Inside script.js
document.addEventListener("DOMContentLoaded", function() {
  // Array of funny song names
  const funnySongs = [
    "The Chicken Nugget Anthem",
    "Dancing in My Pajamas",
    "The Disco Potato Boogie",
    "Funky Monkey Love",
    "Banana Peel Slide",
  ];

  let isPlaying = false;
  // Display the initial song name

  document.getElementById('toggleLight').addEventListener('change', () => {
    document.body.classList.toggle('light')
    Array.from(document.getElementsByTagName('section')).forEach((element) => {
      element.classList.toggle('sectionBackground')
    })
  })
  // Event listener for the "Play" button
  document.getElementById("playMusic").addEventListener("click", function() {
    // Display a random funny song name
    if (!isPlaying) {
      document.getElementById('playMusic').innerHTML = `<i class="fas fa-pause"></i> Pause`
      isPlaying = true;
      const randomIndex = Math.floor(Math.random() * funnySongs.length);
      document.getElementById("songName").innerText = funnySongs[randomIndex];
    }
    else {

      StopSong();
    }

  });

  // Event listener for the "Next Track" button
  document.getElementById("nextTrack").addEventListener("click", function() {
    // Display the next funny song name
    updateSongName();
  });

  // Function to update the song name display
  function updateSongName() {
    const randomIndex = Math.floor(Math.random() * funnySongs.length);
    document.getElementById("songName").innerText = funnySongs[randomIndex];
  }

  function StopSong() {
    // Add logic for pausing music (if needed)
    if (isPlaying) {
      document.getElementById('playMusic').innerHTML = `<i class="fas fa-play"></i> Play`
      isPlaying = false;
    }
    document.getElementById("songName").innerText = "Press Play To Get Groovy!";
  }
  // Event listener for the "Pause" button
  document.getElementById("stopMusic").addEventListener("click", StopSong);


  // Initial temperature
  let temperature = 78;

  // Display the initial temperature
  updateTemperatureDisplay();

  // Event listener for the "Increase" button
  document.getElementById("increaseTemp").addEventListener("click", function() {
    temperature++;
    updateTemperatureDisplay();
  });

  // Event listener for the "Decrease" button
  document.getElementById("decreaseTemp").addEventListener("click", function() {
    temperature--;
    updateTemperatureDisplay();
  });

  // Function to update the temperature display
  function updateTemperatureDisplay() {
    document.getElementById("temperatureDisplay").innerText = temperature + "°F";
  }
});
