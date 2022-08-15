class Calculator {
    input:number

    constructor(input: number) {
        this.input = input
    }

    add = (input: number) => {
        this.input += input
    }

    substract = (input: number) => {
        this.input -= input
    }
    
    multiply = (input: number) => {
        this.input *= input
    }

    divided = (input: number) => {
        this.input /= input
    }

    result = () => {
        console.log(this.input)
    }
}

const calculator = new Calculator(4)

calculator.add(5)
calculator.substract(1)
calculator.multiply(6)
calculator.divided(4)

calculator.result()