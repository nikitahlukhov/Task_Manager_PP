export default function contacts_page () {
    let contacts = document.querySelectorAll('.contacts_nav');
    let sign_in_page = document.querySelector('.sign_in_page');
    let carousel = document.querySelector('.carousel-wrapper');
    let contacts_page = document.querySelector('.contacts')


    for(let i = 0; i < contacts.length; i++){
        contacts[i].addEventListener('click', ()=>{
            carousel.style.display = 'none';
            sign_in_page.style.display = 'none';
            contacts_page.style.display = 'flex';
        })
    }
    
}