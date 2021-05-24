// 'field is required did not go away might because div is added'

// console.log('Add validation!');

//grab global elements for the DOM

let form = document.querySelector("#parking-form"); 

// let formIsValid;

let allFormsAreValid;

const nameInput = document.querySelector('#name')


// error: field is required, then notificaiton / alert
let error1 = document.createElement("div")
error1.setAttribute('id', 'error1')

let error2 = document.createElement("div")
error2.setAttribute('id', 'error2')
//car maker
let error3 = document.createElement("div")
error3.setAttribute('id', 'error3')


// allow to submit the form only when all fields are valid

form.addEventListener('submit', function (event) {
    event.preventDefault();
    checkAllFields();
    
})

    //define checkAllFields(); ---- all fields are not empty & all format are correct then valid

    function checkAllFields() { 
        validateInput_name();

        let inputIsValid_carYear = validateInput_carYear();
        //car make
        let inputIsValid_carMake = validateInput_carYear();



        if((inputIsValid_carMake) && (inputIsValid_carYear)){
            // above if inputIsValid_name and inputIsValid_carYear both true...
            allFormsAreValid = true;
            console.log ('submitted!')
            // why this does not work? 

            // show the cost is 5 dollar
            document.querySelector('#total').innerHTML = "the cost is $5 per day"
            
        }
    }
    // make variales validateInput_name, cvalidateInput_car-year, 
        // validateInput_name: 'inputIsValid_name ===true' when no empty input
        function validateInput_name() {
            
            if (nameInput.value === "") {
                console.log('input invalid11')
                   
                   document.querySelector('#name-field').classList.add('input-invalid')
                   document.querySelector('#name-field').appendChild(error1).innerHTML = "This field is required. "   
                   return false;
                }

               else{ 
                console.log('valid11') 
                // remove the text added for invalid ..... 
                if(document.querySelector('#error1')){
                    document.querySelector('#error1').remove()
                }

                return true;
               }
            }

            
            

        function validateInput_carYear() {
        // carYear is number and >1990

        //define local variables
            const carYearInput = document.querySelector('#car-year');
            console.log(carYearInput.value)

            if (carYearInput.value === "") {
                    console.log('input invalid22') 
                       document.querySelector('#car-field').classList.add('input-invalid')
                       document.querySelector('#car-field').appendChild(error2).innerHTML = "This field is required. "     
                        return false;
                    }
            else if(isNaN(carYearInput.value) === false){
                    console.log("car year is a number")
                    
                    if(carYearInput.value >= 1990 && carYearInput.value <= 2021){
                            if(document.querySelector('#error2')){
                                document.querySelector('#error2').remove()
                                console.log("remove error2")}
                            //why above does not work? 
                            console.log('valid22')
                            return true;      
                    }
                    else {document.querySelector('#car-field'). appendChild(error2).innerHTML = "year of car must be between 1990 and 2021"}
            }   
            else {
                document.querySelector('#car-field'). appendChild(error2).innerHTML = "must be a number"
                return false;
            }                  
        }            
                   
                

// Q4 ========  shoe total is 5 dollar when all valid and 
//show "the cost is 5"




