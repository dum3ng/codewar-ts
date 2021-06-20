const symbols: { [k: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}
export function solution(roman: string): number {
  // complete the solution by transforming the
  // string roman numeral into an integer
  const keys = Object.keys(symbols)
  const letters = roman.split('')
  let number = 0
  for (let i = 0; i < letters.length; ) {
    const current = letters[i]
    if (i < letters.length - 1) {
      const next = letters[i + 1]
      if (keys.indexOf(current) < keys.indexOf(next)) {
        number += symbols[next] - symbols[current]
        i += 2
      } else {
        number += symbols[current]
        i++
      }
    } else {
      number += symbols[current]
      i++
    }
  }
  return number
}
