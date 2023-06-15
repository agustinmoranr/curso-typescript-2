const infitineLoop = () => { // the type of this function is never, because it never ends.
  while(true) {
    console.log("Never stop learning")
  }
}

const fail = (message: string) => { // the type of this function is never, because ends the execution of the program.
  throw new Error(message)
 }


const example = (data: unknown) => {
  if(typeof data === "string") {
    return "I am a string"
  }
  if(Array.isArray(data)) {
    return "I am an array"
  }
  return fail("I am a failure")
}


console.log(example("hello"))
console.log(example([1,2,3]))
console.log(example({name: "Agustin", age: 22}))
console.log(example("Never executes"))