x1 = Math.ceil(Math.random()*20-10);
y1 = Math.ceil(Math.random()*20-10);
p1 = "(" + x1 + ", " + y1 + ")";

x2 = Math.ceil(Math.random()*20-10);
y2 = Math.ceil(Math.random()*20-10);
p2 = "(" + x2 + ", " + y2 + ")";

x3 = Math.ceil(Math.random()*20-10);
y3 = Math.ceil(Math.random()*20-10);
p3 = "(" + x3 + ", " + y3 + ")";

points = p1 + ", " + p2 + ", and " + p3;
r = Math.ceil(Math.random()*20-10);

vert = false
svalue = "x";
dvalue = "y";

ans = "Ref(x, y) = (";

if (Math.ceil(Math.random()*20-10) > 0)
{
  vert = true;
}

if (vert)
{
  nx1 = 2*r - x1;
  nx2 = 2*r - x2;
  nx3 = 2*r - x3;
  ny1 = y1;
  ny2 = y2;
  ny3 = y3;
  ans = ans + 2*r + " - x, y)";
}
else
{
  ny1 = 2*r - y1;
  ny2 = 2*r - y2;
  ny3 = 2*r - y3;
  nx1 = x1;
  nx2 = x2;
  nx3 = x3;
  ans = ans + "x, " + 2*r + " - y)";
}
np1 = "(" + nx1 + ", " + ny1 + ")";
np2 = "(" + nx2 + ", " + ny2 + ")";
np3 = "(" + nx3 + ", " + ny3 + ")";

npoints = np1 + ", " + np2 + ", and " + np3;
