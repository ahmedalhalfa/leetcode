function romanToInt(s: string): number {
    const romanSympols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900
    }
    let res = 0;
    let sArr = s.split("");
    for (let index = 0; index < sArr.length;)
        {
            res += romanSympols[sArr[index]+sArr[index+1]] || romanSympols[sArr[index]] || 0;
            if (romanSympols[sArr[index]+sArr[index+1]]) index += 2;
            else index++;
        }
    return res;
};