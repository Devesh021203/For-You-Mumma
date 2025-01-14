const app = document.getElementById("app");
const message = document.getElementById("message");
const buttons = document.getElementById("buttons");

let step = 0;

// Messages for each step
const messages = [
  "It's your special day...",
  "To make your day special for you are special to me!",
  "Do you wanna see what I made??",
  "Have a look at it mom.",
];

// Initialize the sequence
function startSequence() {
  // Update the message for the current step
  message.textContent = messages[step] || "";

  // Clear buttons
  buttons.innerHTML = "";

  // Add buttons dynamically
  if (step === 2) {
    // Show "Yes" and "No" buttons
    buttons.innerHTML = `
      <button class="blue-button" onclick="nextStep()">Yes</button>
      <button class="blue-button" onclick="nextStep()">No</button>
    `;
  } else if (step < messages.length) {
    // Show "Next" button for all other steps
    buttons.innerHTML = `<button class="blue-button" onclick="nextStep()">Next</button>`;
  } else {
    // Transition to the dark screen after the last message
    showDarkScreen();
  }
}

// Move to the next step
function nextStep() {
  step++;
  startSequence();
}

// Transition to the dark screen
function showDarkScreen() {
  document.body.style.backgroundColor = "black";
  app.innerHTML = `<button class="blue-button" onclick="showLightScreen()">Lights On</button>`;
  
  // Reset the layout for dark mode
  app.style.display = "flex";
  app.style.justifyContent = "center";
  app.style.alignItems = "center";
  app.style.flexDirection = "column"; // Ensure the content is vertically centered

  // Set text color to white for dark mode
  message.style.color = "white";
}

// Transition to the light screen
function showLightScreen() {
  document.body.style.backgroundColor = "white";

  // Add content and reset buttons to original appearance
  app.innerHTML = `
    <button class="blue-button" onclick="playMusic()">Play Music</button>
  `;
  
  // Reapply initial button styles after turning on the lights
  app.style.display = "flex";
  app.style.flexDirection = "column";
  app.style.justifyContent = "center";
  app.style.alignItems = "center";
  app.style.height = "100vh"; // Full screen height

  // Change text color to black after turning on the lights
  message.style.color = "black";
}

// Play music and show "Decorate" button
function playMusic() {
    const audio = new Audio("music.mp3"); // Replace with your actual music file
    audio.loop = true; // Enable looping
    audio.play();
    app.innerHTML = `<button class="blue-button" onclick="showDecoration()">Decorate</button>`;
  }
  

// Show "Happy Birthday" banner and "Fly Balloons" button
function showDecoration() {
  app.innerHTML = `
    <h1>🎉 Happy Birthday! 🎉</h1>
    <button class="blue-button" onclick="flyBalloons()">Fly Balloons</button>
  `;
}

// Animate balloons and show "Cut the Cake" button
function flyBalloons() {
  const balloonContainer = document.createElement("div");
  balloonContainer.id = "balloons-container";

  for (let i = 0; i < 20; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloons";
    balloon.style.left = `${Math.random() * 100}vw`;
    balloon.style.backgroundColor = getRandomColor();
    balloon.style.width = "30px";
    balloon.style.height = "50px";
    balloon.style.borderRadius = "50%";
    balloon.style.position = "absolute";
    balloon.style.animation = "float 5s linear infinite";
    balloon.style.bottom = "0";
    balloonContainer.appendChild(balloon);
  }

  document.body.appendChild(balloonContainer);
  app.innerHTML = `<button class="blue-button" onclick="cutCake()">Let's Cut the Cake</button>`;
}

// Show cake and display the "Message" button
function cutCake() {
  app.innerHTML = `
    <img class="cake" src="images/cake.jpg" alt="Cake">
    <button class="blue-button" onclick="showMessage()">I Have a Message for You</button>
  `;
}

// Show the final popup message
function showMessage() {
  document.body.style.backgroundColor = "black";
  app.innerHTML = `
    <h1 style="color: white;">"Thank you for being the most amazing mom! 💖"</h1>
  `;
}

// Utility function to generate random colors for balloons
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Start the sequence when the page loads
startSequence();
