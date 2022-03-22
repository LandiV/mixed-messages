nouns = ["bird", "clock", "boy", "cat", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];

let randomNounFirst = nouns[Math.floor(Math.random() * nouns.length)];
//console.log(randomNoun);
let randomNounSecond = nouns[Math.floor(Math.random() * nouns.length)];
let randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
let randomAdverb = adverbs[Math.floor(Math.random() * adverbs.length)];

let randomMessage = () => {
        let sentence = `The ${randomNounFirst} ${randomVerb} a ${randomNounSecond} ${randomAdverb}.`;
        let randomSentence = Math.floor(Math.random(sentence));
    return console.log(sentence);
};

randomMessage()
