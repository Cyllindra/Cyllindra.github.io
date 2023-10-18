a = Math.ceil(Math.random() * 20 - 10);
b = Math.ceil(Math.random() * 20 - 10);
c = Math.ceil(Math.random() * 20 - 10);
d = Math.ceil(Math.random() * 20 - 10);

bsign = "+";
dsign = "+";

if (b <= 0) {
  b = b - 1;
  bsign = "-";
}
if (c <= 0) {
  d = d - 1;
  dsign = "-";
}

ab = Math.abs(b);
ad = Math.abs(d);

number_a = a + bsign + ab + "i";
number_b = c + dsign + ad + "i";

sign = " + ";

if (a * d + b * c <= 0) {
  sign = " - ";
}

real = a * c - b * d;
imag = Math.abs(a * d + b * c);

ans = real + sign + imag + "i";

function check() {
  val_1 = document.getElementById("val_1").value;
  val_2 = document.getElementById("val_2").value;

  console.log(`${val_1} + ${val_2}i`);

  if (val_1 == real && val_2 == imag) {
    correctDisplay();
  } else {
    incorrectDisplay();
  }
}

function correctDisplay() {
  document.getElementById("result").innerHTML =
    "<span style='color: green; font-style: italic;'>Correct!</span> Click <a href='NCN2.html'>here</a> for a new problem.";
}

function incorrectDisplay() {
  document.getElementById("result").innerHTML =
    "<span style='color: red; font-style: italic;'>Incorrect!</span>";
}
