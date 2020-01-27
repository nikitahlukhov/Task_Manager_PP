export default function logout() {
    const logout = document.querySelectorAll('.logout');

    for (let i = 0; i < logout.length; i++) {
        logout[i].addEventListener('mousedown', () => {
            let usersArray = JSON.parse(window.localStorage.users);
            if (usersArray) {
                for (let i = 0; i<usersArray.length; i++){
                    if(usersArray[i].loggedIn == true) {
                        usersArray[i].loggedIn = false;
                        window.localStorage.users = JSON.stringify(usersArray);
                        document.location.reload(true)
                    }
                }
            }
            
        })
    }
    
}