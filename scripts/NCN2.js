a = Math.ceil(Math.random()*20-10);
b = Math.ceil(Math.random()*20-10);
c = Math.ceil(Math.random()*20-10);
d = Math.ceil(Math.random()*20-10);

bsign = " + ";
dsign = " + ";

if (b <= 0){b = b - 1; bsign = " - ";}
if (c <= 0){d = d - 1; dsign = " - ";}

ab = Math.abs(b)
ad = Math.abs(d)

numbers = a + bsign + b + "i and " + c + dsign + d + "i"