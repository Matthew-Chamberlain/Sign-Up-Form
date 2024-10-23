const firstName = document.querySelector("#firstName");
const secondName = document.querySelector("#secondName");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phoneNumber");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#passwordConfirm");

function inputFocus(element)
{
    if(!element.value.trim() == "")
    {
        if(!element.checkValidity())
        {
            element.style.borderColor = "red";
        }
        else{
            element.style.borderColor = "lightBlue";
        }
    }
    else{
        element.style.borderColor = "lightBlue";
    }
}

function inputChange(element)
{
    if(element == confirmPassword || element == password)
    {
        if(!confirmPassword.value.trim() == "")
        {
            if(confirmPassword.value != password.value)
            {
                confirmPassword.setCustomValidity("Passwords do not match");
                document.querySelector("#confirmPasswordError").textContent = "Passwords do not match";
                confirmPassword.style.borderColor = "red";
            }
            else{
                confirmPassword.setCustomValidity("");
                document.querySelector("#confirmPasswordError").textContent = "";
                if(element == password){confirmPassword.style.borderColor = "lightgrey";}    
            }
        }
        else
        {
            document.querySelector("#confirmPasswordError").textContent = "";
        }
    }

    if(element == password)
    {
        if(!element.value.trim() == "")
        {
            if(element.value.length < 8)
            {
                document.querySelector("#passwordLengthError").textContent = "Password must be at least 8 characters in length";
            }
            else{
                document.querySelector("#passwordLengthError").textContent = "";
            }
            if(!/[A-Z]/.test(element.value))
            {
                document.querySelector("#passwordCaseError").textContent = "Password must contain at least uppercase character";
            }
            else{
                document.querySelector("#passwordCaseError").textContent = "";
            }

            if(!/\d/.test(element.value))
            {
                document.querySelector("#passwordNumberError").textContent = "Password must contain at least one number";
            }
            else
            {
                document.querySelector("#passwordNumberError").textContent = "";
            }
        
        }
        else{
            document.querySelector("#passwordLengthError").textContent = "";
            document.querySelector("#passwordCaseError").textContent = "";
            document.querySelector("#passwordNumberError").textContent = "";
        }
    }

    if(element == email)
    {
        if(!element.value.trim() == "")
        {
            if(!element.checkValidity())
            {
                document.querySelector("#emailError").textContent = "Please enter a valid email";
            }
            else
            {
                document.querySelector("#emailError").textContent = "";
            }
        }
        else{
            document.querySelector("#emailError").textContent = "";
        }
            
    }

    if(!element.value.trim() == "")
    {
        if(!element.checkValidity())
            {
                element.style.borderColor = "red";
            }
        else{
            element.style.borderColor = "lightBlue";
        }
    }
    else{
        element.style.borderColor = "lightBlue";
    }
}

function inputBlur(element)
{
    if(!element.value.trim() == "")
    {
        if(!element.checkValidity())
        {
            element.style.borderColor = "red";
        }
        else{
            element.style.borderColor = "lightGrey";
        }
    }
    else{
        element.style.borderColor = "lightGrey";
    }
}

function submitForm()
{
    if(!firstName.checkValidity())
    {
        firstName.style.borderColor = "red";
    }
    if(!secondName.checkValidity())
    {
        secondName.style.borderColor = "red";
    }
    if(!email.checkValidity())
    {
        email.style.borderColor = "red";
    }
    if(!phoneNumber.checkValidity())
    {
        phoneNumber.style.borderColor = "red";
    }
    if(!password.checkValidity())
    {
        password.style.borderColor = "red";
    }
    if(!confirmPassword.checkValidity())
    {
        confirmPassword.style.borderColor = "red";
    }
}