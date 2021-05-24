


console.log('Add validation!');




let form = document.querySelector("#parking-form"); 

let formIsValid;

let total = document.querySelector("#total"); 

// test for input --- log 
// form.addEventListener('input', event=> {
//     console.log('user input captred!')
// })



//show the user toal cost is 5 div total
// --- "the cost is 5 dollar perday"  if the form is valid


form.addEventListener('submit', event=>{
    // event.PreventDefault()

    // if (formIsValid){

        document.querySelector("#total").innerHTML = "The cost is $5 per day"
    

    // }

   


}
)

// #6 