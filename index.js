const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const upperCase = (word) => {
    let uppercasedWord = ''
    for (let i = 0; i < word.length; i++) {
        const index = letters.indexOf(word[i])
        if (index !== -1) {
            uppercasedWord += capitalLetters[index]
        } else {
            uppercasedWord += word[i]
        }
    }
    return uppercasedWord
}

const lowercaseWord = 'hello'
const uppercaseWord = upperCase(lowercaseWord)
console.log(uppercaseWord)
