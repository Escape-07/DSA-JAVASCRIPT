function longestWord(sentense) {
    let words = sentense.split(' ');
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, "")

}

console.log(longestWord("sdfsd f fsdkbfks fhsdf dslfds hsdddddddddddddddd fdhhfdk."))



