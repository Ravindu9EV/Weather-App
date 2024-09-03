//https://api.weatherapi.com/v1/search.json?key=6b9fad01b91c43c4b36102328242608&q=

var icon = document.getElementById("themeIcon");

icon.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  console.log("ko");

  if (document.body.classList.contains("light-mode")) {
    icon.src = "images/darkModeIcon.png";
  } else {
    icon.src = "images/lightModeIcon.png";
  }
});
