class ScientificCalculator {
    input: number
    phi: number = 3.14

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

    value = (): number => {
        return this.input
    }

    squared = (): number => {
        let value = this.input
        value *= value

        return value
    }

    cubed = (): number => {
        let value = this.input
        let result = value * value * value
        return result;
    }

    circleArea = (): number => {
        let r = this.input
        let result = this.phi * (r * r)
        return result
    }

    circleRound = (): number => {
        let r = this.input
        let result = 2 * this.phi * r
        return result
    }

    printInput = () => {
        console.log(this.input)
    }

}

const sceincalculator = new ScientificCalculator(4)

sceincalculator.add(5)
sceincalculator.substract(1)
sceincalculator.multiply(6)
sceincalculator.divided(4)

console.log(sceincalculator.value())
console.log(sceincalculator.squared())
console.log(sceincalculator.cubed())
console.log(sceincalculator.circleArea())
console.log(sceincalculator.circleRound())