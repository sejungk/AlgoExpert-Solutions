// function getNthFib(n) {
//   if (n === 1) return 0;
//   if (n === 2) return 1;
  
//   return getNthFib(n - 1) + getNthFib(n - 2);
// }


// function getNthFib(n, cache = {1: 0, 2: 1}) {
//   if (n in cache) return cache[n];
  
//   cache[n] = getNthFib(n - 1, cache) + getNthFib(n - 2, cache);
//   return cache[n];
// }


function getNthFib(n, prevFibs = [0, 1]) {
  if (n < 3) return n - 1;
  
  for (let i = 2; i < n; i++) {
    let newFib = prevFibs[0] + prevFibs[1];
    prevFibs[0] = prevFibs[1];
    prevFibs[1] = newFib;
  }
  return prevFibs[1];
}


// Do not edit the line below.
exports.getNthFib = getNthFib;

