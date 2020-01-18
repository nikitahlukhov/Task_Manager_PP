export default function logout() {
    let logout = document.getElementById('logout');

    logout.addEventListener('click', function() {
        let usersArray = JSON.parse(window.localStorage.users);
        if (usersArray) {
            for (let i = 0; i<usersArray.length; i++){
                if(usersArray[i].loggedIn == true) {
                    usersArray[i].loggedIn = false;
                    window.localStorage.users = JSON.stringify(usersArray);
                    let arr = document.querySelectorAll('main > *');
                    for (let i=0; i<arr.length; i++){
                        arr[i].style.display = 'none'; 
                    }
                    document.getElementById('logged_in').style.display = 'none';
                    document.getElementById('logged_out').style.display = 'block';
                    document.querySelector('.carousel-wrapper').style.display = 'block';
    
                    event.preventDefault()
                }
            }
        }
        
    })
}