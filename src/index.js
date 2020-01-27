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
            coreSkill: "Front-End",
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
            coreSkill: "CSS",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "kolya",
            password: "kolya",
            coreSkill: "C++",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "katya",
            password: "katya",
            coreSkill: "C#",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "masha",
            password: "masha",
            coreSkill: "Python",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "mazur",
            password: "mazur",
            coreSkill: "Angular",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "bob",
            password: "bob",
            coreSkill: "React",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "dasha",
            password: "dasha",
            coreSkill: "Marketing",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "igor",
            password: "igor",
            coreSkill: "Project Management",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "sasha",
            password: "sasha",
            coreSkill: "Java",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "bill",
            password: "bill",
            coreSkill: "HTML",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "max",
            password: "max",
            coreSkill: "JQuery",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "semen",
            password: "semen",
            coreSkill: "Bootstrap",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "yulia",
            password: "yulia",
            coreSkill: "Business",
            loggedIn: false,
            messages: {
                sentMessages: [],
                inboxMessages: [],
            },
            isAdmin: false,
        },
        {
            name: "nadia",
            password: "nadia",
            coreSkill: "CSS",
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
    
    
    
    
    
    search();
    logout();
    login_page();
    
    aboutUs();
    
    messages(); 
    tasks();
    employees()
    

    const home = document.querySelectorAll('.home_button');
    for (let i = 0; i < home.length; i++) {
        home[i].addEventListener('mousedown', () => {
            let arr = document.querySelectorAll('main > *');
                    for (let i=0; i<arr.length; i++){
                        arr[i].style.display = 'none'; 
                    }
            document.querySelector('.carousel-wrapper').style.display = 'flex';
        });
    }
    
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









