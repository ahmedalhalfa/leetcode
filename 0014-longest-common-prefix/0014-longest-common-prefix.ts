function longestCommonPrefix(strs: string[]): string {
    let output = "";
    let char;
    if (strs.length === 1) return strs[0];
    for (let i = 0; i < strs[0].length; i++)
        {
            for (let j = 0; j < strs.length - 1; j++)
                {
                    char = strs[j][i];
                    if (strs[j][i] !== strs[j+1][i]) return output;
                }
            output += char;
            
        }
    return output;
};
