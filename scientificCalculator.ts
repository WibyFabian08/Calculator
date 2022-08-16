import Calculator from "./basicCalculator"

class ScientificCalculator extends Calculator {
    squared = (): number => {
        let value = this.value
        value *= value

        return value
    }

    cubed = (): number => {
        let value = this.value
        let result = value * value * value
        return result;
    }

    circleArea = (): number => {
        let r = this.value
        let result = ScientificCalculator.phi() * (r * r)
        return result
    }

    circleRound = (): number => {
        let r = this.value
        let result = 2 * ScientificCalculator.phi() * r
        return result
    }

    static phi = (): number => {
        return 3.14
    }
}

const sceincalculator = new ScientificCalculator(4)

sceincalculator.add(5)
sceincalculator.substract(1)
sceincalculator.multiply(6)
sceincalculator.divided(4)

console.log(sceincalculator.squared())
console.log(sceincalculator.cubed())
console.log(sceincalculator.circleArea())
console.log(sceincalculator.circleRound())