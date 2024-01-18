const userinputTNB = document.getElementById('user-input')
const checkBtnTNB = document.getElementById('check-btn')
const clearBtnTNB = document.getElementById('clear-btn')
const resultsTNB = document.getElementById('results-div')

const telephoneCheck = input => {
    if (input === '') {
        alert('Please provide a phone number')
        return
    }
    const phoneValid = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/
    
    const pTagTNB = document.createElement('p')
    pTagTNB.className = 'results-text'

    phoneValid.test(input)
    ? (pTagTNB.style.color = '#00471b')
    : (pTagTNB.style.color = '#4d3800');

    pTagTNB.appendChild(
        document.createTextNode(
          `${phoneValid.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`
        )
      );
    resultsTNB.appendChild(pTagTNB)  
}

checkBtnTNB.addEventListener("click", ()=>{
    telephoneCheck(userinputTNB.value)
    userinputTNB.value = ""
})
userinputTNB.addEventListener("keydown", e => {
    if(e.key === 'Enter'){
        telephoneCheck(userinputTNB.value)
        userinputTNB.value = ""
    }
})
clearBtnTNB.addEventListener("click", ()=> {
    resultsTNB.textContent = ""
})