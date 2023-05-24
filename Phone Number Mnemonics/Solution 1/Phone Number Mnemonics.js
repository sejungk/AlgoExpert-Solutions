function phoneNumberMnemonics(phoneNumber) {
  const currMnemonic = new Array(phoneNumber.length).fill('0');
  let mnemonicsFound = [];
  
  phoneNumberMnemonicsHelper(0, phoneNumber, currMnemonic, mnemonicsFound);
  return mnemonicsFound;
}


function phoneNumberMnemonicsHelper(idx, phoneNumber, currMnemonic, mnemonicsFound) {
  if (idx === phoneNumber.length) {
    const mnemonic = currMnemonic.join('');
    mnemonicsFound.push(mnemonic);
  } else {
    const digit = phoneNumber[idx];
    const letters = DIGIT_LETTERS[digit];
    
    for (const letter of letters) {
      currMnemonic[idx] = letter;
      phoneNumberMnemonicsHelper(idx + 1, phoneNumber, currMnemonic, mnemonicsFound);
    }
  }
}


const DIGIT_LETTERS = {
  1: ["1"],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
  0: ["0"]
}


// recursive calls 
//                             p(0)
//            /           /            \           \ 
//          p(1)         p(1)          p(1)         p(1)
//          /             |              |             \
//        p(3)           p(3)           p(3)           p(3)
//      /  |  \         / | \          / | \           / | \
//  p(4) p(4) p(4)  p(4) p(4) p(4) p(4) p(4) p(4)  p(4) p(4) p(4)
// Do not edit the line below.
exports.phoneNumberMnemonics = phoneNumberMnemonics;

