export default function login_page() {
    const login = document.querySelectorAll('.sign_in');
    const carousel = document.querySelector('.carousel-wrapper');

    const signInPage = document.querySelector('.sign_in_page');
    const signInForm = document.querySelector('.sign_in_wrapper form');
    const userName_SignIn = document.getElementById('sign_in_login');
    const password_SignIn = document.getElementById('sign_in_password');
    const signInButton = document.getElementById('sign_in_button');
    const signUpButton = document.getElementById('sign_up_button');

    const signUpForm = document.querySelector('.sign_up_wrapper form');
    const userName_SignUp = document.getElementById('sign_up_login');
    const password_SignUp = document.getElementById('sign_up_password');
    const coreSkill = document.getElementById('sign_up_skill');
    const saveButton = document.getElementById('save_button');
    const profileName = document.getElementById('nav_profile');


    for (let i = 0; i < login.length; i++) {
        login[i].addEventListener('mousedown', () => {
            hideElements()
            signUpForm.style.display = 'none';
            signInPage.style.display = 'flex';
            signInForm.style.display = 'flex';
            removeAlertSignUp()
        });
    }
   


    signInButton.addEventListener('click', () => {
        if (userName_SignIn.value == '' || password_SignIn.value == '') {
            addAlertMessageSignIn('Please Fill in both forms')
            clearInput()
            
            event.preventDefault()
        }


        let hasPass = [];
        const usersArray = JSON.parse(window.localStorage.users);
        for (let i = 0; i < usersArray.length; i++) {
            hasPass.push(usersArray[i].name)
            hasPass.push(usersArray[i].password)
            if (userName_SignIn.value == usersArray[i].name
                && password_SignIn.value == usersArray[i].password){
                clearInput();
                hideElements();
                usersArray[i].loggedIn = true;
                window.localStorage.users = JSON.stringify(usersArray);
                profileName.childNodes[0].textContent = usersArray[i].name;
                break;

            } 
        }

        if (userName_SignIn.value != '' && password_SignIn.value != '') {
            if ((hasPass.indexOf(userName_SignIn.value) == -1 || hasPass.indexOf(password_SignIn.value) == -1)
                || (hasPass.indexOf(userName_SignIn.value) == -1 && hasPass.indexOf(password_SignIn.value) == -1)) {
                clearInput()
                addAlertMessageSignIn('Username or password is wrong')
            }
        }

        
    })

    userName_SignIn.addEventListener('focus', removeAlertSignIn)

    password_SignIn.addEventListener('focus', removeAlertSignIn)

    userName_SignUp.addEventListener('focus', removeAlertSignUp)

    password_SignUp.addEventListener('focus', removeAlertSignUp)

    coreSkill.addEventListener('focus', removeAlertSignUp)

    signUpButton.addEventListener('click', () => {
        signInForm.style.display = 'none'
        signUpForm.style.display = 'flex';
        removeAlertSignIn()
        event.preventDefault()
    })




    saveButton.addEventListener('click', () => {
        if (userName_SignUp.value == '' || password_SignUp.value == '' || coreSkill.value == '') {
            addAlertMessageSignUp('Please Fill in all forms');
        }

        let newUser = {
            name: userName_SignUp.value,
            password: password_SignUp.value,
            coreSkill: coreSkill.value,
            loggedIn: false,
            isAdmin: false,
        }
        if (window.localStorage.users && userName_SignUp.value != '' && password_SignUp.value != '' && coreSkill.value != '') {
            let usersArray = JSON.parse(window.localStorage.users);
            if (isUserNameExist(newUser)) {
                addAlertMessageSignUp('User with such login already exist');
                clearInput()
                event.preventDefault()
            } 
            else if (!isUserNameExist(newUser)) {
                usersArray.push(newUser);
                window.localStorage.users = JSON.stringify(usersArray);
                carousel.style.display = 'none';
                signUpForm.style.display = 'none';
                signInPage.style.display = 'flex';
                signInForm.style.display = 'flex';
                clearInput()
                event.preventDefault();
            }

        }

    })

    function clearInput() {
        let inputs = document.querySelectorAll('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = ''
        }

    }

    function isUserNameExist(newUser) {
        let usersArray = JSON.parse(window.localStorage.users);
        for (let i = 0; i < usersArray.length; i++) {
            if (newUser.name == usersArray[i].name) {
                return true
            }
        }
    }

    function removeAlertSignIn() {
        if (signInForm.lastElementChild.tagName == 'P') {
            signInForm.lastElementChild.remove()
            event.preventDefault()
        }
    }

    function removeAlertSignUp() {
        if (signUpForm.lastElementChild.tagName == 'P') {
            signUpForm.lastElementChild.remove()
            event.preventDefault()
        }
    }

    function addAlertMessageSignUp(message) {
        let alert_message = document.createElement('p')
        alert_message.innerText = message;
        alert_message.style.color = 'red';
        if (signUpForm.lastElementChild.tagName == 'BUTTON') {
            signUpForm.appendChild(alert_message)
        }
        event.preventDefault()
    }

    function addAlertMessageSignIn(message) {
        let alert_message = document.createElement('p')
        alert_message.innerText = message;
        alert_message.style.color = 'red';
        if (signInForm.lastElementChild.tagName == 'BUTTON') {
            signInForm.appendChild(alert_message)
        }
        event.preventDefault()
    }

    function hideElements() {
        let arr = document.querySelectorAll('main > *');
        for (let i = 0; i < arr.length; i++) {
            arr[i].style.display = 'none';
        }

    }
}





