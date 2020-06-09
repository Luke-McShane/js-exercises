// The 'every' method is evaluated as true if the callback function returns true for every element in the collection
const words = [ 'dig', 'dog', 'log', 'bag', 'wag' ];
const moreWords = [ 'dig', 'dogs', 'log', 'bat', 'wag' ];

const everyWordThreeLetters = words.every((word) => word.length === 3);
const everyWordEndInG = words.every((word) => word[word.length - 1].toLowerCase() === 'g');

// The 'some' method is evaluated as true if the callback function returns true for at least one element in the collection
const someWordsThreeLetters = moreWords.some((word) => word.length === 3);
const someWordsEndInS = moreWords.some((word) => word[word.length - 1].toLowerCase() === 's');
