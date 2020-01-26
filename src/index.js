import login_page from './login.js';
import aboutUs from './about_us.js';
import logout from './logout.js';
import messages from './profile/messages.js'
import tasks from './profile/tasks.js'
import employees from './profile/employees.js'
import search from './search.js'



//foreach for ie11
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

window.onload = function () {
    const home = document.querySelectorAll('.home_button');
    for (let i = 0; i < home.length; i++) {
        home[i].addEventListener('click', () => {
            let arr = document.querySelectorAll('main > *');
                    for (let i=0; i<arr.length; i++){
                        arr[i].style.display = 'none'; 
                    }
            document.querySelector('.carousel-wrapper').style.display = 'flex';
        });
    }
    
    
    
    
    if (!window.localStorage.users){
        let registeredUsers = [{
            name: "admin",
            password: "admin",
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: true,
            loggedIn: false,
        },
        {
            name: "vanya",
            password: "vanya",
            coreSkill: "JavaScript",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "nikita",
            password: "nikita",
            coreSkill: "Dota 2",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "vova",
            password: "vova",
            coreSkill: "Intelligence",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "kolya",
            password: "vova",
            coreSkill: "energy",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "katya",
            password: "vova",
            coreSkill: "wine",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "masha",
            password: "vova",
            coreSkill: "love",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "mazur",
            password: "vova",
            coreSkill: "drink",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "bob",
            password: "vova",
            coreSkill: "bob",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "dasha",
            password: "vova",
            coreSkill: "marketing",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "igor",
            password: "vova",
            coreSkill: "Intelligence",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "sasha",
            password: "vova",
            coreSkill: "Intelligence",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "mazur",
            password: "vova",
            coreSkill: "drink",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "bob",
            password: "vova",
            coreSkill: "bob",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "dasha",
            password: "vova",
            coreSkill: "marketing",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "igor",
            password: "vova",
            coreSkill: "Intelligence",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "sasha",
            password: "vova",
            coreSkill: "Intelligence",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
    ];
        window.localStorage.users = JSON.stringify(registeredUsers);
            
    }
    
    if (!window.localStorage.tasks){
        let tasks = [];
        window.localStorage.tasks = JSON.stringify(tasks);
    }
    
    
    
    if (isLogged()){
        document.getElementById('logged_out').style.display = 'none'
        document.getElementById('logged_in').style.display = 'block'
    } else if (!isLogged()){
        document.getElementById('logged_in').style.display = 'none'
        document.getElementById('logged_out').style.display = 'block'
         
    }
    
    
    logout();
    search();
    login_page();
    
    aboutUs();
    messages(); 
    tasks();
    employees()
    
    function isLogged(){
        let usersArray = JSON.parse(window.localStorage.users);
        
            for (let i = 0; i < usersArray.length; i++){
                if(usersArray[i].loggedIn == false){
                continue
                } else if (usersArray[i].loggedIn == true){
                    return true
                }
                return false
                
            }
        
    }
    
    
    
    
    const shareButton = document.getElementById('share_button');
    const copyLink = document.getElementById('share_link_copy');
    const shareBox = document.getElementById('share_link_container');
    const shareBoxClose = shareBox.getElementsByTagName("SPAN")[0];
    
    shareButton.addEventListener('click', ()=>{
    shareBox.style.display = 'block'
    urlCopied.innerHTML = window.location.href;
    selectText('urlCopied')
    })
    
    function selectText(containerID) {    
        var range = document.createRange();
        range.selectNode(document.getElementById(containerID));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    
    }
    
    copyLink.addEventListener('click', ()=>{
        document.execCommand('copy')
    })
    
    shareBoxClose.addEventListener('click', ()=>{
        shareBox.style.display = 'none'
    })
}









