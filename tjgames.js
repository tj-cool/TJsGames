// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element by its ID
    var fbButton = document.getElementById('fb');
    var scramblerButton = document.getElementById("scrambler");
    // Add an event listener to the button
    fbButton.onclick = function() {
        window.location = "fb.html"
    }
    scramblerButton.onclick = function() {
      window.location = "scrambler.html";

    };
    }
  );