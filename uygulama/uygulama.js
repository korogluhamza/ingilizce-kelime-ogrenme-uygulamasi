let count = 0;

function getWord() {
  if (count >= 9) {
    const message = document.getElementById("message");
    message.style.display = "block";
    message.innerText = "Bugünlük Kelime Öğrenme Sınırını Doldurdunuz.";
    return;
  }
  fetch('kelimeler.txt')
    .then(response => response.text())
    .then(text => {
      const words = text.split('\n');
      const randomIndex = Math.floor(Math.random() * words.length);
      const word = words[randomIndex];
      const wordsDiv = document.getElementById("words");
      wordsDiv.innerText = word;
      count++;
    });
}
