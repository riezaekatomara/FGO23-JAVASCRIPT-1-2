function transformSentence(sentence) {

    const wordsDescending = sentence.split(' ').sort((a, b) => b.localeCompare(a));

    const wordsUppercase = wordsDescending.map(word => word.toUpperCase());

    wordsUppercase.push("FAZZTRACK");
    
    const reversedSentence = wordsUppercase.reverse();
    
    const result = reversedSentence.join(' ');
    
    return result;
}


const inputSentence = "Belajar JavaScript itu menyenangkan";
const transformedSentence = transformSentence(inputSentence);
console.log(transformedSentence); 