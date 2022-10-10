// Adding variables to store our data
const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');
const buy=document.querySelector('.buy-submit');
const mydisplay=document.querySelector('.my-display');


// Refactoring with Arrow Function
const countLeters = (some_data) =>{
  const price = some_data.replace(' ', '').length * 5; // price of each letter
  userLeterPreview.textContent = some_data
  userPricePreview.textContent = '$'+price
}

userInput.oninput = (e)=>{
  countLeters(e.target.value)
}
 


buyNow = () => {
    mydisplay.style.display='block'
    if(userLeterPreview.textContent==='Your Name'){
        alert('enter custom letter')
     }

    if (userInput.value==='') {
        mydisplay.textContent='input your name'
    }

    else if(userInput.value.length > 15 ){
        mydisplay.textContent='letter should not be more than 15'
    }

   else if (userInput.value !==''){
    mydisplay.textContent='successful'
    }

        
}
buy.addEventListener('click', buyNow)
