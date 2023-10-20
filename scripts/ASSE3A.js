x = Math.ceil(Math.random()*20-10);
y = Math.ceil(Math.random()*20-10);

if (x <= 0){x = x - 1;}
if (y <= 0){y = y - 1;}

b = x + y;
c = x * y;

ax = Math.abs(x);
ay = Math.abs(y);
ab = Math.abs(b);
ac = Math.abs(c);

sign1 = " + ";
sign2 = " + ";

if (b < 0){
  sign1 = " - ";
}
if (c < 0){
  sign2 = " - ";
}

if (b == 0){poly = "x<sup>2</sup>" + sign2 + ac + " = 0";}
else{poly = "x<sup>2</sup>" + sign1 + ab + "x" + sign2 + ac + " = 0";}

sign1 = " + ";
sign2 = " + ";

if (x > 0){sign1 = " - ";}
if (y > 0){sign2 = " - ";}

factored = "(x " + sign1 + ax + ")(x " + sign2 + ay + ") = 0";

ans = "x = " + x*-1 + ", " + y*-1;
