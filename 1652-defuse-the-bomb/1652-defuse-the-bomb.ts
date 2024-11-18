function decrypt(code: number[], k: number): number[] {
    const decryptedCode: number[] = [];
    for (let outerIndex = 0; outerIndex < code.length; outerIndex++) {
        if (k > 0) {
            let sum = 0;
            for (let innerIndex = 1; innerIndex <= k; innerIndex++) {
                sum += code[(outerIndex + innerIndex) % code.length]
            }
            decryptedCode.push(sum);
        }
        else if (k < 0) {
            let sum = 0;
            for (let innerIndex = 1; innerIndex <= Math.abs(k); innerIndex++) {
                let index = (outerIndex - innerIndex) % code.length;
                sum += code[index >= 0 ? index : code.length - Math.abs(index)];
            }
            decryptedCode.push(sum);
        }
        else {
            decryptedCode.push(0);
        }
    }
    return decryptedCode;
};