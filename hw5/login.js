document
  .getElementById("submitbtn")
  .addEventListener("click", validate_username);

document
  .getElementById("username")
  .addEventListener("keypress", function (redirect) {
    if (redirect.key === "Enter") {
      validate_username();
    }
  });

function validate_username() {
  let username = document.getElementById("username").value;
  const valid =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^*()-_+[]{}:'|`~<.>/?";
  let error = [];
  if (username.length < 5) {
    error.push("Username must be 5 characters or longer.");
  }
  if (username.length > 40) {
    error.push("Username cannot be longer than 40 characters.");
  }
  if (username.includes(" ")) {
    error.push("Username cannot contain spaces.");
  }
  if (username.includes(",")) {
    error.push("Username cannot contain commas.");
  }
  if (username.includes("=")) {
    error.push("Username cannot contain =.");
  }
  if (username.includes(";")) {
    error.push("Username cannot contain semicolons.");
  }
  if (username.includes("&")) {
    error.push("Username cannot contain &.");
  }
  if (error.length > 0) {
    alert(error.join("\n"));
  } else {
    for (char of username) {
      if (!valid.includes(char)) {
        alert(
          "Username can only use characters from the following string:\n" +
            valid
        );
        return;
      }
    }
    window.location.href = "index.html";

    document.cookie = "username=" + username + "; Max-Age=3600;";

    return;
  }
}
