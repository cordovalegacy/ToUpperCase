const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let upperCasedWord = ''

const upperCase = (word) => {
    for (let i = 0; i < word.length; i++) {
        const index = letters.indexOf(word[i])
        if (index !== -1) upperCasedWord += capitalLetters[index] //if not capital, add
        else upperCasedWord += word[i] //if capital, keep
    }
    console.log(upperCasedWord)
}

upperCase("I am testing my abilities")
