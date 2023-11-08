angle = Math.ceil(Math.random() * 71 + 9);
adj = Math.ceil(Math.random() * 26 + 4);

radians = angle * Math.PI / 180;

opp = adj * Math.tan(radians);
opp = opp.toFixed(2);

hyp = adj / Math.cos(radians);
hyp = hyp.toFixed(2);

tangent = `tan(${angle})=\\dfrac{opp}{${adj}}`;
cosine = `cos(${angle})=\\dfrac{${adj}}{hyp}`;
