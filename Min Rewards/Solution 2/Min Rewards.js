function minRewards(scores) {
  let rewards = new Array(scores.length).fill(1);


  for (let i = 1; i < scores.length; i++) {
    let prev = scores[i-1];
    let curr = scores[i];


    if (prev < curr) rewards[i] = rewards[i-1] + 1
  }


  for (let i = scores.length-1; i >= 0; i--) {
    let prev = scores[i+1];
    let curr = scores[i];


    if (prev < curr) rewards[i] = Math.max(rewards[i+1] + 1, rewards[i])
  }
  return rewards.reduce((a, b) => a + b);
}


// Do not edit the line below.
exports.minRewards = minRewards;

