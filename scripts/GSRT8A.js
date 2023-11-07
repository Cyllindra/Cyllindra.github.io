angle = Math.ceil(Math.random()*71+9);
adj = Math.ceil(Math.random()*26+4);

angle = angle * Math.PI / 180;

opp = adj * Math.tan(angle);
opp = opp.toFixed(2);

hyp = adj / Math.cos(angle);
hyp = hyp.toFixed(2);

tangent = `tan(\\theta)=\\dfrac{${opp}}{${adj}}`;
cosine = `cos(\\theta)=\\dfrac{${adj}}{${hyp}}`;
