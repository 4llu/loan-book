export const formatEuro = (sum) => {

    const sign = sum > 0 ? '+' : '';
    return `${sign}${sum.toFixed(2)}€`
}
