const checkBtn = document.getElementById("check-btn")
const txtInput = document.getElementById("text-input")
const result = document.getElementById("result")

function checkVal(){
    const inputVal = txtInput.value
    if(inputVal === ''){
        alert("Please input a value")
    }else{
        const re = /[\W_]/g;
        const newVal = inputVal.toLowerCase().replace(re, '')
        const bool = newVal == newVal.split('').reverse().join('')
        
        result.classList.remove('hidden');
        result.innerText = bool? `${inputVal} is a palindrome` : `${inputVal} is not a palindrome`
    }
}

checkBtn.addEventListener("click", checkVal)