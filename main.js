// Kung Fu Panda Character Look Up

// Event Listener
document.getElementById("input-name").addEventListener("change", searchClicked);

// Event Function
function searchClicked() {
  // Get Input Value (what character to look for?)
  let name = document.getElementById("input-name").value;
  name = name.toLowerCase();

  // Test Input Variable and update the page
  if (name === "po" || name === "dragon warrior") {
    // Update page to Po
    display("Po", "Buddy, I am the Dragon Warrior.");
  } else if (name === "tigress" || name === "master tigress") {
    // Update page to Tigress
    display("Tigress", "That was pretty hardcore.");
  } else if (name === "mantis" || name === "master mantis") {
    // Update page to Mantis
    display("Mantis", "Fear the bug!");
  } else if (name === "monkey" || name === "master monkey") {
    // Update page to Monkey
    display("Monkey", "We should hang out.");
  } else if (name === "crane" || name === "master crane") {
    // Update page to Crane
    display(
      "Crane",
      "You can chain my body, but you will never chain my warrior spirit!"
    );
  } else if (name === "viper" || name === "master viper") {
    // Update page to Viper
    display("Viper", "I don't need to bite to fight!");
  } else if (name === "shifu" || name === "master shifu") {
    // Update page to Master Shifu
    display("Shifu", "There is now a Level Zero.");
  } else if (name === "ping" || name === "mr. ping") {
    // Update page to Mr. Ping
    display("Ping", "We are noodle folk, broth runs through our veins!");
  } else {
    // Update page to Question Mark
    display("?????", "Character not found.");
  }
}

function display(name, quote) {
  document.getElementById("character-name").innerHTML = name;
  if (name == "?????") {
    document.getElementById("main-img").src = `img/question-mark.png`;
  } else {
    document.getElementById("main-img").src = `img/${name}.png`;
  }
  document.getElementById("quote").innerHTML = quote;
}
