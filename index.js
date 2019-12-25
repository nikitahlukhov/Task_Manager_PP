

    let login = document.getElementById('login');
    let carousel = document.querySelector('.carousel-wrapper');
    let sign_in = document.getElementById('sign_in');
    let registry = document.getElementById('registry');
    let userName = document.getElementById('login_input_login');
    let password = document.getElementById('login_input_password');
    let userName_register = document.getElementById('registry_input_login');
    let password_register = document.getElementById('registry_input_password');
    let email_register = document.getElementById('registry_input_email');
    let login_form = document.querySelector('.login_wrapper form');
    let registry_form = document.querySelector('.registry_wrapper form');
    let login_page = document.querySelector('.login_page');
    let save = document.getElementById('save');
    
    login.addEventListener('click', () => {
        carousel.style.display = 'none';
        registry_form.style.display = 'none';
        login_page.style.display = 'flex';
        login_form.style.display = 'flex';
        if (registry_form.lastElementChild.tagName == 'P') {
            registry_form.lastChild.remove()
        }
    })
    
    
    sign_in.addEventListener('click', () => {
    if (userName.value == '' || password.value == '') {
        let a = document.createElement('p')
        a.innerText = 'Please Fill in both forms'
        a.style.color = 'red'
        if (login_form.lastElementChild.tagName == 'BUTTON') {
            login_form.appendChild(a)
        }
        
        
    }
    })

    registry.addEventListener('click', () => {
        login_form.style.display = 'none'
        registry_form.style.display = 'flex';
        if (login_form.lastElementChild.tagName == 'P') {
            login_form.lastChild.remove()
        }
        })

    save.addEventListener('click', () => {
        if (userName_register.value == '' || password_register.value == '' || email_register.value == '') {
            let a = document.createElement('p')
            a.innerText = 'Please Fill in all forms'
            a.style.color = 'red'
        
            if (registry_form.lastElementChild.tagName == 'BUTTON') {
                registry_form.appendChild(a)
            }
            
            
        }
        
        })









        


