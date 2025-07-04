
  const s1 = document.getElementById("switch1");
  const s2 = document.getElementById("switch2");
  const s3 = document.getElementById("switch3");
  const audio = document.getElementById("warningAudio");

  // Pointing to files inside "music/" folder
  const audioFiles = [
    "music/audio1.mp3",
    "music/audio2.mp3",
    "music/audio3.mp3"
  ];

  let lastPlayedIndex = -1;

  function playRandomAudio() {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * audioFiles.length);
    } while (randomIndex === lastPlayedIndex && audioFiles.length > 1);

    lastPlayedIndex = randomIndex;
    audio.src = audioFiles[randomIndex];
    audio.currentTime = 0;
    audio.play();
  }

  function enforceRules(changedSwitch) {
    const is1 = s1.checked;
    const is2 = s2.checked;
    const is3 = s3.checked;

    if (is1 && is2 && is3) {
      if (changedSwitch === s1) s3.checked = false;
      else if (changedSwitch === s2) s3.checked = false;
      else if (changedSwitch === s3) s2.checked = false;

      playRandomAudio();
    } else if (is1 && is2) {
      s3.checked = false;
    } else if (is1 && is3) {
      s2.checked = false;
    } else if (is2 && is3) {
      s1.checked = false;
    }
  }

  s1.addEventListener("change", () => enforceRules(s1));
  s2.addEventListener("change", () => enforceRules(s2));
  s3.addEventListener("change", () => enforceRules(s3));

