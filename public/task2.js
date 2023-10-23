function validateForm() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  let isValid = true;

  if (nameInput.value.trim() === "") {
    alert("Name is required");
    isValid = false;
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(emailInput.value)) {
    alert("Invalid email address");
    isValid = false;
  }

  return isValid;
}
