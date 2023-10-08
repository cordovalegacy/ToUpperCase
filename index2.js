const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let upperCasedWord = '' //we will return a new string because strings are immutable

const upperCase = (word) => {
    for (let i = 0; i < word.length; i++) {
        const index = letters.indexOf(word[i]) //these indeces are unique
        if (index !== -1) { //check for existing capital letters
            upperCasedWord += capitalLetters[index]
        }
        else {
            upperCasedWord += word[i]
        }
    }
    console.log(word, " | " , upperCasedWord)
}

upperCase("Just the boys")