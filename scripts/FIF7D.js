z = Math.ceil(Math.random()*20-10);
r = Math.ceil(Math.random()*20-10);
n = Math.ceil(Math.random()*20-10);

while (z == r){
  r = Math.ceil(Math.random()*20-10);
}

while (n == r || n == z){
  n = Math.ceil(Math.random()*20-10);
}

az = Math.abs(z);
ar = Math.abs(r);
an = Math.abs(n);

zsign = `+`;
rsign = `+`;
nsign = `+`;

if (az > z){zsign = `-`;}
if (ar > z){rsign = `-`;}
if (an > z){nsign = `-`;}

top = `\\((x ${zsign} ${az})(x ${rsign} ${ar})\\)`;
bottom = `\\((x ${nsign} ${an})(x ${rsign} ${ar})\\)`;

tp = z + r;
tq = z * r;
bp = n + r;
bq = n * r;

atp = Math.abs(tp);
atq = Math.abs(tq);
abp = Math.abs(bp);
abq = Math.abs(bq);

tpsign = `+`;
tqsign = `+`;
bpsign = `+`;
bqsign = `+`;

if (atp > tp){tpsign = `-`;}
if (atq > tq){tqsign = `-`;}
if (abp > bp){bpsign = `-`;}
if (abq > bq){bqsign = `-`;}

rational = `\\($\dfrac{x^2 ${tpsign} ${atp}x ${tqsign} ${atq}}{x^2 ${bpsign} ${abp}x ${bqsign} ${abq}}\\)`;

ans = `There are two holes -- a removable hole at ${r}, and a non-removable hole (or vertical asymptote) at ${n}$.`;
