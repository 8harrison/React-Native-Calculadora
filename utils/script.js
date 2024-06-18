export default class Calculadora {
    igualdade;
    hasOperation = false;
    hasMinus = false;
    isEqualZero = this.num1 == 0;
    trigonometrics = ['sen(x)', 'cos(x)'];


    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    setNum1 = (num) => (this.num1 = num);
    setNum2 = (num) => (this.num2 = num);

    verifyDigit(digit) {
        return this.identifier(digit);
    }

    verifyOperation(digit) {
        let igualdade;
        switch (digit) {
            case '+': igualdade = this.soma
                break
            case '-': igualdade = this.subtr
                break
            case 'x': igualdade = this.mult
                break
            case '÷': igualdade = this.divi
                break
            case 'xⁿ': igualdade = this.expoente
                break
            case 'ⁿ√x': igualdade = this.raiz
                break
        }
        return igualdade;
    }

    soma = (num1, num2) => num1 + num2;
    subtr = (num1, num2) => num1 - num2;
    divi = (num1, num2) => num1 / num2;
    mult = (num1, num2) => num1 * num2;
    expoente = (num1, num2) => num1 ** num2;
    raiz = (num1, num2) => num1 ** (1 / num2);
    seno = num => Math.sin(num);
    cosseno = num => Math.cos(num);


    cutRightZeros(num) {
        let n = num.split('000');
        return parseFloat(n[0]);
    }

    equal() {
        if (this.num2 == '') {
            return this.num1
        }
        this.hasMinus = false
        this.hasOperation = false
        let n1 = parseFloat(this.num1)
        let n2 = parseFloat(this.num2)
        let resultado = this.igualdade(n1, n2).toFixed(10);
        let cutedZeros = this.cutRightZeros(resultado)
        this.num1 = '0';
        this.num2 = '0';
        return '' + cutedZeros;
    }

    identifier(digit) {
        let number = parseFloat(digit);
        if (isNaN(number) && digit != '.') {
            if (digit != '-') {
                if (this.num1 == '' || this.num1 == '0') {
                    return '0'
                } else if (this.hasOperation) {
                    if (digit == '=') {
                        return this.isOperation(digit)
                    }
                    return this.num2
                }
                this.hasOperation = true
                return this.isOperation(digit)
            } else {
                return this.printMinus(digit)
            }
        } else {
            return this.resetDisplay(digit)
        }
    }

    isOperation(digit) {
        if (digit != '=') {
            if (this.trigonometrics.includes(digit)) {
                return this.isTrigonometric(digit)
            } else {
                this.hasOperation = true
                this.igualdade = this.verifyOperation(digit);
                return this.num1
            }
        } else {
            return this.equal();
        }
    }

    isTrigonometric(digit) {
        let value = (Math.PI * this.num1) / 180
        this.hasMinus = false
        this.hasOperation = false
        this.num1 = '0'
        let resultado;
        switch (digit) {
            case 'sen(x)':
                resultado = this.seno(value).toFixed(10)
                return this.cutRightZeros(resultado)
            case 'cos(x)':
                resultado = this.cosseno(value).toFixed(10)
                return this.cutRightZeros(resultado)
        }
    }

    resetDisplay(digit) {
        if (this.num1 == '0') {
            this.num1 = ''
            return this.setNumbers(digit)
        } else if (this.num2 == '0') {
            this.num2 = ''
            return this.setNumbers(digit)
        } else {
            return this.setNumbers(digit)
        }
    }

    setNumbers(digit) {
        if (!this.hasOperation) {
            let isDot = this.isDot(this.num1, digit)
            this.setNum1(isDot);
            return this.num1;
        } else {
            let isDot = this.isDot(this.num2, digit)
            this.setNum2(isDot);
            return this.num2
        }
    }

    isDot(num, digit) {
        if (num.includes('.')) {
            if (digit != '.') {
                return num + digit
            } else {
                return num
            }
        } else {
            return num + digit
        }
    }

    printMinus(num) {
        if (num == '-') {
            if (this.hasOperation) {
                if (this.num2 == '0' || this.num2 == '') {
                    if (!this.hasMinus) {
                        this.hasMinus = true
                        return this.num2 += '-'
                    }
                } else {
                    return this.num2
                }
            } else {
                if (this.num1 == '0' || this.num1 == '') {
                    if (!this.hasMinus) {
                        this.num1 = ''
                        this.hasMinus = true
                        return this.num1 += '-'
                    }
                } else {
                    this.hasMinus = false
                    this.hasOperation = true
                    return this.isOperation(num)
                }
            }
        } else {
            return this.resetDisplay(num)
        }
    }
}

