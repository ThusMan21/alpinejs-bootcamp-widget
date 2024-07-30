function longestWord(sentence) {
    const words = sentence.split(' ');
    let longest = '';
    for (const word of words) {
        if (word.length >= longest.length) {
            longest = word;
        }
    }
    return longest;
}

function shortestWord(sentence) {
    const words = sentence.split(' ');
    let shortest = words[0];
    for (const word of words) {
        if (word.length <= shortest.length) {
            shortest = word;
        }
    }
    return shortest;
}

function wordLengths(sentence) {
    const words = sentence.split(' ');
    let totalLength = 0;
    for (const word of words) {
        totalLength += word.length;
    }
    return totalLength;
}

function showLongestWord() {
    const sentence = document.getElementById('sentence').value;
    const result = longestWord(sentence);
    document.getElementById('result').innerText = 'Longest word: ' + result;
}

function showShortestWord() {
    const sentence = document.getElementById('sentence').value;
    const result = shortestWord(sentence);
    document.getElementById('result').innerText = 'Shortest word: ' + result;
}

function showWordLengths() {
    const sentence = document.getElementById('sentence').value;
    const result = wordLengths(sentence);
    document.getElementById('result').innerText = 'Total word lengths: ' + result;
}