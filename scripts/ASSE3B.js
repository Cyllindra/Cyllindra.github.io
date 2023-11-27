b = Math.ceil(Math.random() * 20 - 10);
if (b <= 0) {
  b = b - 1;
}
c = b**2 + 1;
while (c > b**2){
  c = Math.ceil(Math.random() * 20 - 10);
}

if (c <= 0) {
  c = c - 1;
}

diff = c - (b/2)**2;

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

step1 = `x^2 + 2(${bsign}${ab/2})x + ${(b/2)**2} - ${(b/2)**2} ${csign} ${ac} = 0`;

step2 = `(x ${bsign} ${ab/2})^2 - ${(b/2)**2} ${csign} ${ac} = 0`;

step3 = `(x ${bsign} ${ab/2})^2 = ${-diff}`;

step4 = `\\sqrt{(x ${bsign} ${ab/2})^2} = \\pm\\sqrt{${-diff}}`;

step5 = `x ${bsign} ${ab/2} = \\pm\\sqrt{${-diff}}`;

answer = `x = ${-b/2}\\pm\\sqrt{${-diff}}`;

factor1 = Math.round(((-b/2)+(-diff)**(1/2))*100)/100;
factor2 = Math.round(((-b/2)-(-diff)**(1/2))*100)/100;

