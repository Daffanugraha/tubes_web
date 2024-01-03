function handleInput() {
    const usernameInput = document.getElementById("username");
  
    if (usernameInput.value !== "") {
      usernameInput.removeAttribute("placeholder");
    } else {
      usernameInput.setAttribute("placeholder", "Masukkan NIP");
    }
  }
  