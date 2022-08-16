export default class Calculator {
    value:number

    constructor(input: number) {
        this.value = input
    }

    add = (input: number) => {
        this.value += input
    }

    substract = (input: number) => {
        this.value -= input
    }
    
    multiply = (input: number) => {
        this.value *= input
    }

    divided = (input: number) => {
        this.value /= input
    }
}

const result = new Calculator(4)

console.log(result.value)

result.add(5)
result.substract(1)
result.multiply(6)
result.divided(4)

console.log(result.value)
