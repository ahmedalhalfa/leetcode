function scoreOfString(s: string): number {
    return s.split("").reduce((acc, character, index) => {
        if (index === s.length - 1) return acc;
        return (Math.abs(getAscii(character) - getAscii(s[index+1]))) + acc
    }, 0);
};

function getAscii(char): number {
    if (!char) return 0;
  return char.charCodeAt(0);
}