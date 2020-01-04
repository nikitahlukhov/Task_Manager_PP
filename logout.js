export default function logout() {
    let logout = document.getElementById('logout');

    logout.addEventListener('click', ()=>{
        let usersArray = JSON.parse(window.localStorage.users);
        for (let i = 0; i<usersArray.length; i++){
            if(usersArray[i].loggedIn == true) {
                usersArray[i].loggedIn = false;
                window.localStorage.users = JSON.stringify(usersArray);
                document.getElementById('logged_out').style.display = 'block';
                document.getElementById('logged_in').style.display = 'none';
                event.preventDefault()
            }
        }
    })
}