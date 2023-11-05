a = Math.ceil(Math.random() * 20 - 10);
b = Math.ceil(Math.random() * 20 - 10);
c = Math.ceil(Math.random() * 20 - 10);
d = Math.ceil(Math.random() * 20 - 10);

bsign = " + ";
dsign = " + ";

if (a <= 0) {
  a = a - 1;
}
if (b <= 0) {
  b = b - 1;
  bsign = " - ";
}
if (c <= 0) {
  c = c - 1;
}
if (d <= 0) {
  d = d - 1;
  dsign = " - ";
}

ab = Math.abs(b);
ad = Math.abs(d);

number_1 = a + bsign + ab + "i";
number_2 = c + dsign + ad + "i";

sign = " + ";

if (a * d + b * c <= 0) {
  sign = " - ";
}
real = a * c - b * d;
imag = Math.abs(a * d + b * c);
ans = real + sign + imag + "i";
