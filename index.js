import login_page from './login.js';
import contacts_page from './contacts.js';
import logout from './logout.js';
logout();
login_page();
contacts_page();

if (!window.localStorage.users){
    let registeredUsers = [{
        name: "admin",
        password: "admin",
        email: "admin@gmail.com",
        isAdmin: true,
        loggedIn: false,
    }];
        window.localStorage.users = JSON.stringify(registeredUsers);
}

if (isLogged()){
    document.getElementById('logged_out').style.display = 'none'
} else if (!isLogged()){
    document.getElementById('logged_in').style.display = 'none'
}


function isLogged(){
    let usersArray = JSON.parse(window.localStorage.users);
        for (let i = 0; i<usersArray.length; i++){
            if(usersArray[i].loggedIn == true){
                return true
            } else {
                return false
            }
        }
    
}

let shareButton = document.getElementById('share_button');
let copyLink = document.getElementById('share_link_copy');
let shareBox = document.getElementById('share_link_container');
let shareBoxClose = shareBox.getElementsByTagName("SPAN")[0];

shareButton.addEventListener('click', ()=>{
shareBox.style.display = 'block'
urlCopied.innerHTML = window.location.href;
selectText('urlCopied')
})

function selectText(containerid) {    
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

}

copyLink.addEventListener('click', ()=>{
    document.execCommand('copy')
})

shareBoxClose.addEventListener('click', ()=>{
    shareBox.style.display = 'none'
})

