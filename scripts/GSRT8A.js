angle = Math.ceil(Math.random() * 71 + 9);
adj = Math.ceil(Math.random() * 26 + 4);

angle = (angle * Math.PI) / 180;

opp = adj * Math.tan(angle);

hyp = adj / Math.cos(angle);
