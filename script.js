// 'field is required did not go away might because div is added'

// console.log('Add validation!');

//grab global elements for the DOM

let form = document.querySelector("#parking-form"); 

let formIsValid;

let allFormsAreValid;


// ***input name variables****
let inputIsValid_name 

const nameInput = document.querySelector('#name')


// error: field is required, then notificaiton / alert
let error1 = document.createElement("div")
error1.setAttribute('id', 'error1')

let error2 = document.createElement("div")
error2.setAttribute('id', 'error2')

// allow to submit the form only when all fields are valid

form.addEventListener('submit', function (event) {
    event.preventDefault();
    checkAllFields();
    
})

    //define checkAllFields(); ---- all fields are not empty & all format are correct then valid

    function checkAllFields() {
        
        validateInput_name();

        let inputIsValid_carYear
        validateInput_carYear();

        if((inputIsValid_name) && (inputIsValid_carYear)){
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
                   inputIsValid_name = false;
                   document.querySelector('#name-field').classList.add('input-invalid')
                   document.querySelector('#name-field').appendChild(error1).innerHTML = "This field is required. "   
               }

               else{ 
                inputIsValid_name = true;
                console.log('valid11') 
                // remove the text added for invalid ..... 
                if(document.querySelector('#error1')){
                    document.querySelector('#error1').remove()
                }
               }
            }


            

        function validateInput_carYear() {
        // carYear is number and >1990

        //define local variables
            const carYearInput = document.querySelector('#car-year');
            console.log(carYearInput.value)

            if (carYearInput.value === "") {
                    console.log('input invalid22') 
                       inputIsValid_carYear= false;
                       document.querySelector('#car-field').classList.add('input-invalid')
                       document.querySelector('#car-field').appendChild(error2).innerHTML = "This field is required. "     
            }
            else if(typeof(carYearInput.value) === "number"){
                    console.log("car year is a number")
                    if(carYearInput.value >= 1990 && carYearInput.value <= 2021){
                        inputIsValid_carYear= true;
                            console.log('valid22')
                            if(document.querySelector('#error2')){
                                document.querySelector('#error2').remove()
                            }
                    }
                    else{document.querySelector('#car-field'). appendChild(error2).innerHTML = "year of car must be latter than 1990"}
            }   
            else {
                document.querySelector('#car-field'). appendChild(error2).innerHTML = "must be a number"
            }                  
        }            
                   
                

// Q4 ========  shoe total is 5 dollar when all valid and 
//show "the cost is 5"




