//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

//For each button, the first parameter is accessing each btn
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        //Everytime you click on the button the information on the class will pull
        const styles = e.currentTarget.classList
        //If style contains that class listed, continue with the function
        if(styles.contains('decrease')){
            count--
        } else if(styles.contains('increase')){
            count++
        } else{
            count = 0
        }
        //Change color of number if negative and positive
        if(count > 0){
            value.style.color = 'green'
        }
        if(count < 0){
            value.style.color = 'red'
        }
        if(count === 0){
            value.style.color = 'black'
        }
        //this is the variable that holds the value which is the span tag number 
        value.textContent = count
    })
})

