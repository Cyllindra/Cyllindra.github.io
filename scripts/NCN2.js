a = Math.ceil(Math.random()*20-10);
b = Math.ceil(Math.random()*20-10);
c = Math.ceil(Math.random()*20-10);
d = Math.ceil(Math.random()*20-10);

bsign = " + ";
dsign = " + ";

if (a <= 0)
{
  a = a - 1;
}
if (b <= 0)
{
  b = b - 1; 
  bsign = " - ";
}
if (c <= 0)
{
  c = c - 1;
}
if (d <= 0)
{
  d = d - 1;
  dsign = " - ";
}

ab = Math.abs(b);
ad = Math.abs(d);

numbers = a + bsign + ab + "i and " + c + dsign + ad + "i";

sign = " + ";

if (a*d + b*c <= 0)
{
  sign = " - ";
}

ans = a*c-b*d + sign + Math.abs(a*d + b*c) + "i";
