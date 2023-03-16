function tournamentWinner(competitions, results) {
  let hash = {};
  let currentWinner = ['', 0];


  for (let i = 0; i < competitions.length; i++) {
    let winnerIdx = results[i] === 0 ? 1 : 0;
    let currWinner = competitions[i][winnerIdx];
    if (hash[currWinner]) hash[currWinner]++;
    else hash[currWinner] = 1;


    if (currentWinner[1] < hash[currWinner]) currentWinner = [currWinner, hash[currWinner]];
  }
  return currentWinner[0];
}


// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;

