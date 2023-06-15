let anyVar: any = 'im any'
anyVar = 1
anyVar = true
anyVar = [1, 2, 3]
anyVar = { name: 'Agustin', age: 22 }
anyVar = () => { console.log('hello') }

anyVar.toupperCase() //this is fine, but it will throw an error at runtime
let myBoolean: boolean = anyVar //this is fine, but we are losing the type safety

let unknownVar: unknown = 'im unknown' //this ensures that we need to conditionally check the type
unknownVar = 1
unknownVar = true
unknownVar = [1, 2, 3]
unknownVar = { name: 'Agustin', age: 22 }
unknownVar = () => { console.log('hello') }

unknownVar.toupperCase() //this shows an error

if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase() //now we know that unknownVar is a string
}

//in this case we need that the string is a valid JSON, but we can not ensure that, so we can say that the return type is unknown
const parse = (string: string): unknown => {
  return JSON.parse(string)
}

let numberVar: number = unknownVar //now we can not assign unknownVar to a number, we need to check the type first



