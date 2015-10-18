function min(l) {
  let x = l[0];
  for (e of l) {
    if (e < x) x = e;
  }
  return x;
}

function max(l) {
  let x = l[0];
  for (e of l) {
    if (e > x) x = e;
  }
  return x;
}

function roundDown(n, d) {
  return Math.floor(n / d) * d;
}

function roundUp(n, d) {
  return Math.ceil(n / d) * d;
}

function googleChart(map) {
  let years = [...map.keys()];
  let cites = [...map.values()];
  let x1 = roundDown(min(years), 5);
  let x2 = new Date().getFullYear();
  let xstep = 5;
  let y1 = 0;
  let y2 = roundUp(max(cites), 4);
  let ystep = y2 / 4;
  let data = [];
  for (let x = x1; x <= x2; x++) {
    if (!map.has(x)) { data.push(0); continue; }
    data.push(map.get(x));
  }
  return 'http://chart.googleapis.com/chart?' +
    'cht=lc&' +
    'chs=200x100&' +
    'chd=t:' + data.join() + '&' +
    'chds=' + y1 + ',' + y2 + '&' +
    'chxt=x,y&' +
    'chxr=' + 
    '0,' + x1 + ',' + x2 + ',' + xstep + '|' +
    '1,' + y1 + ',' + y2 + ',' + ystep;
}
