b = Math.ceil(Math.random() * 12);
if (b <= 0) { b -= 1; }

c = Math.floor(Math.random() * 8)
if (c <= 0) { c -= 1; }

diff = ((b / 2)^2) + c;
if (diff <= 0) { diff -= 1; }

ab = Math.abs(b);
ac = Math.abs(c);
adiff = Math.abs(diff);

bsign = `+`;
csign = `+`;
diffsign = `+`;

if (ab > b) {
  bsign = `-`;
}
if (ac > c) {
  csign = `-`;
}
if (adiff > diff) {
  diffsign = `-`;
}

quad = `x^2 ${bsign} ${ab}x ${csign} ${ac} = 0`;

step1 = `x^2 + 2(${bsign}${ab/2})x + ${(b/2)^2} - ${(b/2)^2} ${csign} ${ac} = 0`;
step2 = `(x ${bsign} ${ab/2})^2 - ${(b/2)^2} ${csign} ${ac} = 0`;
step3 = `(x ${bsign} ${ab/2})^2 = ${(b/2)^2+c}`;
step4 = `\sqrt((x ${bsign} ${ab/2})^2) = \pm\sqrt(${(b/2)^2+c})`;
step5 = `x ${bsign} ${ab/2} = \pm\sqrt(${(b/2)^2+c})`;

answer = `x = \pm\sqrt(${(b/2)^2+c})`;
