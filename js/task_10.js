const isAllBracketsClosedCorrectly = (str) => {
    const openBrackets = ['(', '{', '['];
    const closeBrackets = [')', '}', ']'];
    let nonClosedBracketsCount = 0;

    for(let i = 0; i< str.length; i++){
        if(openBrackets.includes(str[i])){
            nonClosedBracketsCount++;
        }

        if(closeBrackets.includes(str[i])){
            nonClosedBracketsCount--;
        }
    }

    return nonClosedBracketsCount === 0;
}


const test = 'const isAllBracketsClosedCorrectly = (str) => { return [1,2,3,5]; }';
console.log(isAllBracketsClosedCorrectly(test)); // true