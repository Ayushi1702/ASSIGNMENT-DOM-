const decrement = document.getElementById("decrement") ;
const increment = document.getElementById("increment");
const reset = document.getElementById("reset");
const display = document.getElementById("display");


// for decrement btn
decrement.addEventListener("click", () =>{
    const value = Number(display.innerText);
    if(value > 0){
         display.innerText = value-1;
    }else{
        alert("Decrement can't be done ")
    }
});

// for increment  btn
increment.addEventListener("click", () =>{
    const value = Number(display.innerText);
    if(value >= 0){
        display.innerText = value+1;
    }else{
        alert("Invalid")
    }
});

//for reset btn
reset.addEventListener("click", () => {
    display.innerText = 0;
});

