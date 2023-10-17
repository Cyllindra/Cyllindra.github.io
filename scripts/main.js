function show(tag) {
  var x = document.getElementById(tag);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function print(text) {
  document.write(text)
}
