// y = ax^2 + bx + c

x = Math.ceil(Math.random() * 20 - 10);
y = Math.ceil(Math.random() * 20 - 10);

if (x <= 0) {
  x = x - 1;
}
if (y <= 0) {
  y = y - 1;
}

b = x + y;
c = x * y;

sign1 = "+";
sign2 = "+";

if (b < 0) {
  sign1 = "";
}
if (c < 0) {
  sign2 = "";
}

display_b = `${sign1} ${b}x`;
display_c = `${sign2} ${c}`;

if (b == 1) {
  display_b = "+x";
}
if (b == -1) {
  display_b = "-x";
}
if (b == 0) {
  display_b = "";
}
if (c == 0) {
  display_c = "";
}

poly = `x^2 ${display_b} ${display_c} = 0`;

ans_1 = x * -1;
ans_2 = y * -1;

function check() {
  val_1 = document.getElementById("val_1").value;
  val_2 = document.getElementById("val_2").value;

  if (val_1 == ans_1 || val_1 == ans_2) {
    if (val_2 == ans_1 && val_1 == ans_2) {
      correctDisplay();
    } else if (val_1 == ans_1 && val_2 == ans_2) {
      correctDisplay();
    } else {
      incorrectDisplay();
    }
  } else {
    incorrectDisplay();
  }
}

function correctDisplay() {
  document.getElementById("result").innerHTML =
    "<span style='color: green; font-style: italic;'>Correct!</span> Click <a href='ASSE3A.html'>here</a> for a new problem.";
}

function incorrectDisplay() {
  document.getElementById("result").innerHTML =
    "<span style='color: red; font-style: italic;'>Incorrect!</span>";
}
