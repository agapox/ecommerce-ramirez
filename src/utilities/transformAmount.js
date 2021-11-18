const transformAmount = (amount) => {
    let tAmount = amount.toFixed(2).split('.')
    const newNum = tAmount[0].split('').reverse().map((digit, i) => {
        return i > 0 && i < tAmount[0].length && i % 3 === 0 ? `${digit}.` : digit
    });
    tAmount[0] = newNum.reverse().join('')

    return `$${tAmount.join(',')}`
}


export default transformAmount