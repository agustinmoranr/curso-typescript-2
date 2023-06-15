/* -------part 2-------*/
//know making an overload of the function, can know what type is going to return
export function parseString(input: string): string[]
export function parseString(input: string[]): string

/* -------part 1-------*/
export function parseString(input: string | string[]): string | string[] {
  if (typeof input === 'string') {
    return input.split('') // return an array
  } else {
    return input.join('') // return a string
  }
}

//typescript does not know what type is going to return, just knows that is going to be a string or an array of strings
const resultArray = parseString('hello')
console.log(resultArray)
const resultString = parseString(['h', 'e', 'l', 'l', 'o'])
console.log(resultString)


