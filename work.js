let nouns = [
    'boy',
    'girl',
    'car',
    'dog',
    'school',
    'water bottle',
    'river',
    'pool',
    'building'
]

let verbs = [
    'ran',
    'walked',
    'swam',
    'biked',
    'jumped',
    'fought'
]

let adjectives = [
    'clean',
    'annoying',
    'angry',
    'eager',
    'foolish',
    'funny'
]

let determiners = [
    'this',
    'that',
    'the',
    'their',
    'your'
]

const generateSentence = () => {
    var sentence = determiners[Math.floor(Math.random() * determiners.length)] + ' ' + nouns[Math.floor(Math.random() * nouns.length)] + ' ' 
    + verbs[Math.floor(Math.random() * verbs.length)] + ' ' + determiners[Math.floor(Math.random() * determiners.length)] + ' ' + adjectives[Math.floor(Math.random() * adjectives.length)] +
    ' ' + nouns[Math.floor(Math.random() * nouns.length)]
    return sentence
}

console.log(generateSentence())