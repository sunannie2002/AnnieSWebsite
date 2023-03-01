const greeting = document.getElementById("greeting");

function get_username() {
  const nvs = document.cookie.split("; ");

  for (const nv of nvs) {
    if (nv.startsWith("username=")) {
      return nv.substring("username=".length);
    }
  }
  return "";
}
const username = get_username();
if (username) {
  greeting.innerText = "Hello, " + username + "!";
} else if (!window.location.href.endsWith("login.html")) {
  window.location.href = "login.html";
}
