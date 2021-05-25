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

//car model
let error4 = document.createElement("div")
error4.setAttribute('id', 'error4')

//Date parking
let error5 = document.createElement("div")
error5.setAttribute('id', 'error4')

// Num of Days
let error6 = document.createElement("div")
error6.setAttribute('id', 'error6')

//credit card 
let error7 = document.createElement("div")
error7.setAttribute('id', 'error7')

//cvv 
let error8 = document.createElement("div")
error8.setAttribute('id', 'error8')

//Expiration
let error9 = document.createElement("div")
error9.setAttribute('id', 'error9')


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
        let inputIsValid_carMake = validateInput_carMake();

        //car model
        let inputIsValid_carModel = validateInput_carModel();

        //date parking
        let inputIsValid_dateParking = validateInput_dateParking();

        // num of days
        let inputIsValid_numOfDays = validateInput_numOfDays();

        //credit card 
        let inputIsValid_creditCard = validateInput_creditCard();

        //cvv
        let inputIsValid_cvv = validateInput_cvv();

        //Expiration
        let inputIsValid_exp = validateInput_exp();




        if((inputIsValid_carMake) && (inputIsValid_carYear)){
            // above if inputIsValid_name and inputIsValid_carYear both true...
            allFormsAreValid = true;
            console.log ('submitted!')
            // why this does not work? 

            // show the cost is 5 dollar
            document.querySelector('#total').innerHTML = "the cost is" +   5 * document.querySelector('#days').value ; 
            
        }
    }
    // make variales validateInput_name, cvalidateInput_car-year, 

        //name
        // validateInput_name: 'inputIsValid_name ===true' when no empty input
        function validateInput_name() {
            
            if (nameInput.value === "") {
                console.log('input invalid11')
                   
                   document.querySelector('#name-field').classList.add('input-invalid')
                   document.querySelector('#name-field').appendChild(error1).innerHTML = "Car Name is Required. "   
                   return false;
                }

               else{ 
                console.log('valid11') 
                console.log(nameInput.value)
                // remove the text added for invalid ..... 
                if(document.querySelector('#error1')){
                    document.querySelector('#error1').remove()
                }

                return true;
               }
            }

        //car-year
        function validateInput_carYear() {
        // carYear is number and >1990
        //define local variables
            const carYearInput = document.querySelector('#car-year');
            console.log(carYearInput.value)

            if (carYearInput.value === "") {
                    console.log('input invalid22') 
                       document.querySelector('#car-field').classList.add('input-invalid')
                       document.querySelector('#car-field').appendChild(error2).innerHTML = "Car year is required. "     
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
        
        //car make 
        function validateInput_carMake() {
            const carMakeInput = document.querySelector('#car-make');
            
            if (carMakeInput.value === "") {
                console.log('input invalid33')
                   
                   document.querySelector('#car-field').classList.add('input-invalid')
                   document.querySelector('#car-field').appendChild(error3).innerHTML = "Car Make is required. "   
                   return false;
                }

               else{ 
                console.log('valid33') 
                // remove the text added for invalid ..... 
                if(document.querySelector('#error3')){
                    document.querySelector('#error3').remove()
                }

                return true;
               }
            }
        
        //car model
        function validateInput_carModel() {
            const carModelInput = document.querySelector('#car-model');
            
            if (carModelInput.value === "") {
                console.log('input invalid44')
                   
                   document.querySelector('#car-field').classList.add('input-invalid')
                   document.querySelector('#car-field').appendChild(error4).innerHTML = "Car Model is required. "   
                   return false;
                }

               else{ 
                console.log('valid44') 
                // remove the text added for invalid ..... 
                if(document.querySelector('#error4')){
                    document.querySelector('#error4').remove()
                }

                return true;
               }
            }

        //date Parking  **** this one needs to be modified 
        function validateInput_dateParking() {
            const dateParkingInput = document.querySelector('#start-date-field');
            
            if (dateParkingInput.value === "") {
                console.log('input invalid55')
                   
                   document.querySelector('#start-date-field').classList.add('input-invalid')
                   document.querySelector('#start-date-field').appendChild(error5).innerHTML = "Date parking is required. "   
                   return false;
                }

               else{ 
                //date is undified...    
                console.log(dateParkingInput.value) 
                // remove the text added for invalid ..... 
                if(document.querySelector('#error5')){
                    document.querySelector('#error5').remove()
                }

                return true;
               }
            }

        // number of days 
        function validateInput_numOfDays() {
            // num days are number between 1 and 30
                const numOfDaysInput = document.querySelector('#days');
                console.log(numOfDaysInput.value)
    
                if (numOfDaysInput.value === "") {
                        console.log('input invalid66') 
                           document.querySelector('#days-field').classList.add('input-invalid')
                           document.querySelector('#days-field').appendChild(error6).innerHTML = "Number of days is required. "     
                            return false;
                        }
                else if(isNaN(numOfDaysInput.value) === false){
                        console.log("num of days is a number")
                        
                        if(numOfDaysInput.value >= 1 && numOfDaysInput.value <= 30){
                                if(document.querySelector('#error6')){
                                    document.querySelector('#error6').remove()
                                    console.log("remove error6")}
                                console.log('valid66')
                                return true;      
                        }
                        else {document.querySelector('#days-field'). appendChild(error6).innerHTML = "number of Dats must be between 1 and 30"}
                }   
                else {
                    document.querySelector('#days-field'). appendChild(error6).innerHTML = "must be a number"
                    return false;
                }                  
            }   
        
        //credit card
        function validateInput_creditCard() {

            const creditCardInput = document.querySelector('#credit-card');

            var regex = new RegExp("^[0-9]{16}$");

            function luhnCheck(val) {
                var sum = 0;
                for (var i = 0; i < val.length; i++) {
                    var intVal = parseInt(val.substr(i, 1));
                    if (i % 2 == 0) {
                        intVal *= 2;
                        if (intVal > 9) {
                            intVal = 1 + (intVal % 10);
                        }
                    }
                    sum += intVal;
                }
                return (sum % 10) == 0;
            }
                
                if (creditCardInput.value === "") {
                    console.log('input invalid77')
                       document.querySelector('#credit-card-field').classList.add('input-invalid')
                       document.querySelector('#credit-card-field').appendChild(error7).innerHTML = "Credit number is required. "   
                       return false;
                    }
    
                   else if (!regex.test(creditCardInput.value)) { 
    
                    document.querySelector('#credit-card-field').classList.add('input-invalid')
                    document.querySelector('#credit-card-field').appendChild(error7).innerHTML = "Credit number has to be 16 digits. "
                    return false;
                    console.log('input invalid77')

                    return luhnCheck(creditCardInput.value);
                   }
                    
                   else{
                    console.log(creditCardInput.value) 
                    // remove the text added for invalid ..... 
                    if(document.querySelector('#error7')){
                        document.querySelector('#error7').remove()
                    }
                    return true;

                   }
        //function//         
        }

        //cvv
        function validateInput_cvv() {
            const cvvInput = document.querySelector('#cvv');
            
            if (cvvInput.value === "") {
                console.log('input invalid88')
                   
                   document.querySelector('#cvv-field').classList.add('input-invalid')
                   document.querySelector('#cvv-field').appendChild(error8).innerHTML = "CVV is required. "   
                   return false;
                }

               else if(isNaN(cvvInput.value) === false && cvvInput.value.length === 3){
                        console.log(cvvInput.value.length) 
                        if(document.querySelector('#error8')){
                        document.querySelector('#error8').remove()}
                        return true;
               } 

               else { 
                document.querySelector('#cvv-field').classList.add('input-invalid')
                document.querySelector('#cvv-field').appendChild(error8).innerHTML = "CVV has to be 3 digits. "   
                return false;
                
                }

                
               
        }

        
            
        //exp

        function validateInput_exp() {
            const expInput = document.querySelector('#expiration');

            var regex = new RegExp("^(0[1-9]|1[0-2])\/?([0-9]{4})$")

            // mm/yyyy

            var parts = (expInput.value + "").split("/");
            /// this has a error here ****8 
            var month = parseInt(parts[0]);
            var year = parseInt(parts[1]);

            console.log(expInput.value)  
            console.log(year)
            
            if (!regex.test(expInput.value)) {
                console.log('input invalid99')
                   
                   document.querySelector('#expiration-field').classList.add('input-invalid')
                   document.querySelector('#expiration-field').appendChild(error9).innerHTML = "date format should be mm/yyyy. "   
                   return false;
                }

               else if(year < 1000 || year > 3000 || month == 0 || month > 12){
        
                document.querySelector('#expiration-field').classList.add('input-invalid')
                document.querySelector('#expiration-field').appendChild(error9).innerHTML = "year is not valid. "   
                return false;
               } 

               else if( year< 2021 && month <5){
                document.querySelector('#expiration-field').classList.add('input-invalid')
                document.querySelector('#expiration-field').appendChild(error9).innerHTML = "Expiration can not be in the past. "  
               }

               else { 
                if(document.querySelector('#error9')){
                        document.querySelector('#error9').remove()}
                return true;
                }           
        }





