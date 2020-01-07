export default function contacts_page () {
    let contacts = document.querySelectorAll('.contacts_nav');
    let contacts_page = document.querySelector('.contacts')


    for(let i = 0; i < contacts.length; i++){
        contacts[i].addEventListener('click', ()=>{
            let arr = document.querySelectorAll('main > *');
                for (let i=0; i<arr.length; i++){
                    arr[i].style.display = 'none'; 
                }
            contacts_page.style.display = 'flex';
        })
    }
    
}