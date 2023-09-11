const importedWords: string[] = require('an-array-of-english-words');
const dictionary: Set<string> = new Set(importedWords);

function generateWords(letters: string): string[] {
    // using set for results to avoid duplicates
    const words: Set<string> = new Set();

    // recursion is probably the most straightforward solution
    // passing in the current word and the remaining letters thus avoiding re-using the letter at an index repeatedly
    function generatePermutations(currentWord: string, remainingLetters: string) {
        if (currentWord.length > 0 && dictionary.has(currentWord) && !words.has(currentWord)) {
            words.add(currentWord);
        }

        // the recursion will end once there are no more remaining letters
        for (let i = 0; i < remainingLetters.length; i++) {
            const nextLetter = remainingLetters[i];
            const updatedWord = currentWord + nextLetter;
            // slicing the remaining letters to remove the letter we just used
            const remainingLettersSubstring = remainingLetters.slice(0, i).concat(remainingLetters.slice(i + 1));
            generatePermutations(updatedWord, remainingLettersSubstring);
        }
    }

    // starting with empty string and all available letters
    generatePermutations('', letters);
    // converting set to array for return
    return Array.from(words);
}

const input = 'oogd';
const result = generateWords(input);
console.log(result);