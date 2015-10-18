function queue(f) {
  setTimeout(f, 1000);
}

function step1() {
  let es = document.querySelectorAll('#citationdetails a');
  if (!es.length) return;
  for (let e of es) {
    if (e.textContent === 'Cited By') {
      e.addEventListener('click', step2);
      break;
    }
  }
}

function step2() {
  let es = document.querySelectorAll('#citedby a');
  if (!es.length) { queue(step2); return; }
  let map = new Map();
  for (let e of es) {
    let nums = e.textContent.match(/\d+/g);
    let year = parseInt(nums[nums.length - 1]);
    if (!map.has(year)) map.set(year, 0);
    map.set(year, map.get(year) + 1);
  }
  let e = document.querySelector('#citedby p');
  let html = '<br><br><img src="' + googleChart(map) + '">';
  e.insertAdjacentHTML('beforeend', html);
}

queue(step1);
