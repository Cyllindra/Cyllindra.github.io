// y = ax^2 + bx + c

x = Math.ceil(Math.random()*20-10);
y = Math.ceil(Math.random()*20-10);

if (x <= 0){x = x - 1;}
if (y <= 0){y = y - 1;}

b = x + y;
c = x * y;

sign1 = "+";
sign2 = "+";

if (b < 0){sign1 = "";}
if (c < 0){sign2 = "";}

display_b = `${sign1} ${b}x`;
display_c = `${sign2} ${c}`;

if (b == 1){display_b = "x";}
if (b == -1){display_b = "-x";}
if (b == 0){display_b = "";}
if (c == 0){display_c = "";}


poly = `x^2 ${display_b} ${display_c} = 0`;

console.log("Polynomial: " + poly);

ans = "x = " + x*-1 + ", " + y*-1;