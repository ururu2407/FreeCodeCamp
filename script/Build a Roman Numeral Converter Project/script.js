const convertButton = document.getElementById('convert-btn')
const output2 = document.getElementById('output')
const input = document.getElementById('number')
const convert = num => {
    const roman = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ]

    const result = []

    roman.forEach((arr) => {
        while (num >= arr[1]) {
            result.push(arr[0])
            num -= arr[1]
        }
    })

    return result.join('')
}

const checkValid = (inp, int) => {
    let input = ''

    if (!inp) {
        input = 'Please enter a valid number.';
    } else if (int < 1) {
        input = 'Please enter a number greater than or equal to 1.';
    } else if (int > 9999) {
        input = 'Please enter a number less than or equal to 9999.';
    } else {
        return true;
    }

    output2.innerText = input
    output2.classList.add('alert')

    return false
}

const clear = () => {
    output2.innerText = ''
    output2.classList.remove('alert')
}

const submitConvert = () => {
    const number = document.getElementById('number').value
    const int = parseInt(number, 10)

    output2.classList.remove('hidden')

    clear()

    if (checkValid(number, int)) {
        output2.innerText = convert(int)
    }
}

convertButton.addEventListener("click", () => {
    submitConvert()
})
input.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        submitConvert()
    }
})