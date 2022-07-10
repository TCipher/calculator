
btnClear = document.getElementById('btn--clear')
btn0 = document.getElementById('btn--0')
btn1 = document.getElementById('btn--1')
btn2 = document.getElementById('btn--2')
btn3 = document.getElementById('btn--3')
btn4 = document.getElementById('btn--4')
btn5 = document.getElementById('btn--5')
btn6 = document.getElementById('btn--6')
btn7 = document.getElementById('btn--7')
btn8 = document.getElementById('btn--8')
btn9 = document.getElementById('btn--9')
btnAdd = document.getElementById('btn--add')
btnMulti = document.getElementById('btn--mult')
btnSub = document.getElementById('btn--sub')
btnDiv = document.getElementById('btn--div')
btnEqual = document.getElementById('btn--equal')
inputDisplay = document.getElementById('display')

btnClear.addEventListener('click',() =>{inputDisplay.value = ' ' })
btn0.addEventListener('click',() =>{inputDisplay.value += 0})
btn1.addEventListener('click',() =>{inputDisplay.value += 1})
btn2.addEventListener('click',() =>{inputDisplay.value += 2})
btn3.addEventListener('click',() =>{inputDisplay.value += 3})
btn4.addEventListener('click',() =>{inputDisplay.value += 4})
btn5.addEventListener('click',() =>{inputDisplay.value += 5})
btn6.addEventListener('click',() =>{inputDisplay.value += 6})
btn7.addEventListener('click',() =>{inputDisplay.value += 7})
btn8.addEventListener('click',() =>{inputDisplay.value += 8})
btn9.addEventListener('click',() =>{inputDisplay.value += 9})
btnAdd.addEventListener('click',() =>{
    if(!inputDisplay.value.includes('+')){
        inputDisplay.value += '+'
    }
   })
btnMulti.addEventListener('click',() =>{inputDisplay.value += '*'})
btnSub.addEventListener('click',() =>{inputDisplay.value += '-'})
btnDiv.addEventListener('click',() =>{inputDisplay.value += '/'})

btnEqual.addEventListener('click', () =>{
  inputDisplay.value = eval(inputDisplay.value)
})


