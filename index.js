const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const upperCase = (word) => {
    let uppercasedWord = ''
    for (let i = 0; i < word.length; i++) { //regular for loop
        const index = letters.indexOf(word[i]) //searching letters array for whichever value matches the word
        if (index !== -1) { //check if it is already capitalized
            uppercasedWord += capitalLetters[index] //add capital letter to uppercased word
        } else {
            uppercasedWord += word[i] //grab remaining letters in word
        }
    }
    return uppercasedWord
}

const uppercaseWord = upperCase("hello there")
console.log(uppercaseWord)
