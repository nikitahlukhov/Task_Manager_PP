export default function login_page() {
    let login = document.getElementById('sign_in');
    let carousel = document.querySelector('.carousel-wrapper');

    let sign_in_page = document.querySelector('.sign_in_page');
    let sign_in_form = document.querySelector('.sign_in_wrapper form');
    let userName_SignIn = document.getElementById('sign_in_login');
    let password_SignIn = document.getElementById('sign_in_password');
    let sign_in = document.getElementById('sign_in_button');
    let sign_up = document.getElementById('sign_up');

    let sign_up_form = document.querySelector('.sign_up_wrapper form');
    let userName_SignUp = document.getElementById('sign_up_login');
    let password_SignUp = document.getElementById('sign_up_password');
    let email_SignUp = document.getElementById('sign_up_email');
    let save = document.getElementById('save');



    login.addEventListener('click', function () {
        showElement()
        sign_up_form.style.display = 'none';
        sign_in_page.style.display = 'flex';
        sign_in_form.style.display = 'flex';
        removeAlertSignUp()
    })


    sign_in.addEventListener('click', function () {
        if (userName_SignIn.value == '' || password_SignIn.value == '') {
            addAlertMessageSignIn('Please Fill in both forms')
            clearInput()
            event.preventDefault()
        }


        let hasPass = [];
        let usersArray = JSON.parse(window.localStorage.users);
        for (let i = 0; i < usersArray.length; i++) {
            hasPass.push(usersArray[i].name)
            hasPass.push(usersArray[i].password)
            if (userName_SignIn.value == usersArray[i].name
                && password_SignIn.value == usersArray[i].password
                && usersArray[i].isAdmin == true) {
                clearInput();
                usersArray[i].loggedIn = true;
                window.localStorage.users = JSON.stringify(usersArray);
                document.getElementById('logged_out').style.display = 'none';

                showElement()
                document.getElementById('task_wrapper').style.display = 'block';
                document.getElementById('logged_in').style.display = 'block';
                event.preventDefault()

            } else if (userName_SignIn.value == usersArray[i].name
                && password_SignIn.value == usersArray[i].password) {
                clearInput()
                usersArray[i].loggedIn = true;
                window.localStorage.users = JSON.stringify(usersArray);
                document.getElementById('logged_out').style.display = 'none';

                showElement()
                document.getElementById('task_wrapper').style.display = 'block';
                document.getElementById('logged_in').style.display = 'block';
                event.preventDefault()
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

    email_SignUp.addEventListener('focus', removeAlertSignUp)

    sign_up.addEventListener('click', () => {
        sign_in_form.style.display = 'none'
        sign_up_form.style.display = 'flex';
        removeAlertSignIn()
        event.preventDefault()
    })




    save.addEventListener('click', () => {
        if (userName_SignUp.value == '' || password_SignUp.value == '' || email_SignUp.value == '') {
            addAlertMessageSignUp('Please Fill in all forms');
        }

        let newUser = {
            name: userName_SignUp.value,
            password: password_SignUp.value,
            email: email_SignUp.value,
            loggedIn: false,
        }
        if (window.localStorage.users && userName_SignUp.value != '' && password_SignUp.value != '' && email_SignUp.value != '') {
            let usersArray = JSON.parse(window.localStorage.users);
            if (isUserNameExist(newUser)) {
                addAlertMessageSignUp('User with such login already exist');
                clearInput()
                event.preventDefault()
            } else if (isUserEmailExist(newUser)) {
                addAlertMessageSignUp('User with such email already exist');
                clearInput()
                event.preventDefault()
            }
            else if (!isUserNameExist(newUser) && !isUserEmailExist(newUser)) {
                usersArray.push(newUser);
                window.localStorage.users = JSON.stringify(usersArray);
                carousel.style.display = 'none';
                sign_up_form.style.display = 'none';
                sign_in_page.style.display = 'flex';
                sign_in_form.style.display = 'flex';
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

    function isUserEmailExist(newUser) {
        let usersArray = JSON.parse(window.localStorage.users);
        for (let i = 0; i < usersArray.length; i++) {
            if (newUser.email == usersArray[i].email) {
                return true
            }
        }
    }

    function removeAlertSignIn() {
        if (sign_in_form.lastElementChild.tagName == 'P') {
            sign_in_form.lastElementChild.remove()
            event.preventDefault()
        }
    }

    function removeAlertSignUp() {
        if (sign_up_form.lastElementChild.tagName == 'P') {
            sign_up_form.lastElementChild.remove()
            event.preventDefault()
        }
    }

    function addAlertMessageSignUp(message) {
        let alert_message = document.createElement('p')
        alert_message.innerText = message;
        alert_message.style.color = 'red';
        if (sign_up_form.lastElementChild.tagName == 'BUTTON') {
            sign_up_form.appendChild(alert_message)
        }
        event.preventDefault()
    }

    function addAlertMessageSignIn(message) {
        let alert_message = document.createElement('p')
        alert_message.innerText = message;
        alert_message.style.color = 'red';
        if (sign_in_form.lastElementChild.tagName == 'BUTTON') {
            sign_in_form.appendChild(alert_message)
        }
        event.preventDefault()
    }

    function showElement() {
        let arr = document.querySelectorAll('main > *');
        for (let i = 0; i < arr.length; i++) {
            arr[i].style.display = 'none';
        }

    }
}





