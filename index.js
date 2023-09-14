function regexmatch(word, str){
    if(word.test(str)){
        console.log(`"${str}" matches the Regular Expression.`);
    }else{
        console.log(`"${str}" does not match the Regular Expression.`);
    }
}
regexmatch(/ca[rt]/, "car");
regexmatch(/pr?[op]/, "pop");
regexmatch(/ferr(et|y|ari)/, "ferry");
regexmatch(/.ious/, "delicious");
regexmatch(/\s[.,;:]/, " ;");
regexmatch(/\w{6,}/, "collaboration");
regexmatch(/[^eE]/, "mango");

// Quoting Style
let quoteRegex = /(?<!\w)'(.*?)(?!\w)\g;/
console.log( "Mr Kenny said 'Are you sure you want to learn?' and it was all clear to me.")


// Number Again
let numRegex = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/;
console.log(2E10);