const inputText = document.getElementById('text-input');
const buttonCheck = document.getElementById('check-btn');
const resultPLD = document.getElementById('pld-result');

const checkPalindrome = (input) => {
    const original = input;
    if (input === '') {
        alert('Please input a value')
        return
    }

    resultPLD.replaceChildren()
    const changedStr = input.replace(/\W|_/g, '',).toLowerCase();
    let resultText
    if (changedStr === [...changedStr].reverse().join('')) {
        resultText = `<strong>${original}</strong> is a palindrome.`
    } else {
        resultText = `<strong>${original}</strong> is not a palindrome.`
    }
    const p = document.createElement('p')
    p.className = 'result-text'
    p.innerHTML = resultText
    resultPLD.appendChild(p);
}
buttonCheck.addEventListener("click", () => {
    checkPalindrome(inputText.value)
    inputText.value = '';
})
inputText.addEventListener("keydown", e => {
    if (e.key === 'Enter') {
        checkPalindrome(inputText.value);
        inputText.value = '';
    }
})