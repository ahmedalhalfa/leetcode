function isPalindrome(x: number): boolean {
    let xStr = `${x}`;
    let xStrHalfLength = Math.floor(xStr.length / 2);
    let xStrLength = xStr.length;
    for (let index = 0; index <= xStrHalfLength; index++) {
        if (xStr[index] !== xStr[xStrLength - index - 1]) return false;
    }
    return true;
};