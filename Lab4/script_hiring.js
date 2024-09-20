function validateForm() {
    const text = document.getElementById('text').value;
    const phone = document.getElementById('phone').value;
    const age = parseInt(document.getElementById('age').value, 10); 
    
        const age_lower_requirement = 21;
        const age_upper_requirement = 99;
        const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
        const maxlength = 30;


        if(text.length > maxlength){
            alert('More info cannot have more then ${maxLength} characters.');
            return false;
        }
        if (isNaN(age)) {
            alert("Please enter a valid age.");
            return false;
        }
        if(!phoneRegex.test(phone)){
            alert("Please enter a valid phone number in the format 321-123-4567")
            return false;
        }
        if( age < age_lower_requirement){
            alert("Age is too low");
            return false;
        }
        if(age > age_upper_requirement){
            alert("Age is too high");
            return false;
        }




    return true;
    
    }
    
    document.addEventListener("DOMContentLoaded", function()  {
        document.getElementById('hiring').addEventListener("submit", function(event) {
            if (validateForm() == false) {
                event.preventDefault();
            }
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        const moreInfo = document.getElementById('text');
        const charCount = document.getElementById('charCount');
        const maxLength = 30;
    
        moreInfo.addEventListener('input', function() {
            const remaining = maxLength - moreInfo.value.length;
            charCount.textContent = `${remaining} characters remaining`;
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('hiring');
    
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the form from submitting the traditional way
    
            const fname = document.getElementById('fname').value;
            const lname = document.getElementById('lname').value;
            const address = document.getElementById('address').value;
            const addressTwo = document.getElementById('2address').value;
            const city = document.getElementById('city').value; // Added city
            const state = document.getElementById('state').value;
            const age = document.getElementById('age').value;
            const phonenumber = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
    
            // Get the value of the selected marital status
            const married = document.querySelector('input[name="married"]:checked') ? 
                            document.querySelector('input[name="married"]:checked').value : 'Not specified';
    
            // Get the selected favorite colors
            const colors = [];
            const colorCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
            colorCheckboxes.forEach(checkbox => {
                colors.push(checkbox.nextElementSibling.innerText); // Get the label text
            });
    
            const moreInfo = document.getElementById('text').value;
    
            console.log(fname, lname, address, addressTwo, city, state, age, phonenumber, email, password, married, colors, moreInfo);
        });
    });
    
