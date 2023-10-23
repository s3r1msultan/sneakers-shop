function createButton() {
  const interactiveElements = document.getElementById("elements"); // here we get the object with id="elements"
  const newButton = document.createElement("button"); // here we create the button
  newButton.textContent = "New Button"; // here we set the text of the button
  newButton.addEventListener("click", () => {
    // this is the event listener for the click event
    alert("New Button clicked!");
  });
  interactiveElements.appendChild(newButton); // here we add the new button to the interactive elements list
}
