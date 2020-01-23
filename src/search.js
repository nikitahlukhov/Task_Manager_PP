export default function search () {
let input
let magnifier
let searchBarLi
let results

//is user online

if(isLogged()){
    searchBarLi = document.getElementById('search_logged_in');
    results = Array.from(document.querySelector('#logged_in ul').getElementsByTagName('li'))
    magnifier = document.querySelector('#search_logged_in span')
    input = document.querySelector('#search_logged_in input')
    
} else if (!isLogged()){
    searchBarLi = document.getElementById('search_logged_out');
    results = Array.from(document.querySelector('#logged_out ul').getElementsByTagName('li'))
    magnifier = document.querySelector('#search_logged_out span')
    input = document.querySelector('#search_logged_out input')
}


//eventlistener to the sign
magnifier.addEventListener('click', ()=>{
    input.style.display = 'inline-block'
    magnifier.style.display = 'none'
    input.focus()
})


//list of nav items

const searchInput = searchBarLi.firstElementChild;
const ul = document.createElement('ul');
ul.style.display = 'none'
searchBarLi.appendChild(ul)
    



for (let i = 0; i < results.length; i++) {
    
    if (results[i].getAttribute('id') != 'search_logged_out'
    && results[i].getAttribute('id') != 'search_logged_in'
     && results[i].getAttribute('id') != 'nav_profile'
     && results[i].className != 'about_us'){
        console.log(results[i].textContent)
        let className = results[i].className
        const li = document.createElement('li')
        li.className = className
        const navLi = results[i].innerText;
            li.textContent = navLi;
            ul.appendChild(li) 
            li.addEventListener('click', () => {
                searchInput.value = ''
                ul.style.display = 'none'
            })
    }
    
}

let list = Array.from(ul.children)
searchInput.addEventListener('keyup', (e) => {
        const searchInputValue = e.target.value.toLowerCase();

        //search

        for (let i = 0; i < list.length; i++) {
            const navLi = list[i].innerText;
            if (navLi.toLowerCase().indexOf(searchInputValue) != -1) {
                ul.style.display = 'block'
                ul.children[i].style.display = 'block';
            } else if (navLi.toLowerCase().indexOf(searchInputValue) == -1) {
                ul.children[i].style.display = 'none';
            }
        }
        if (!searchInputValue) {
            ul.style.display = 'none'
        }
        
    });

    searchInput.addEventListener('blur', () => {
        input.style.display = 'none'
        magnifier.style.display = 'inline-block'
    })

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
}