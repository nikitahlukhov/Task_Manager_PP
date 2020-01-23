// if you have any suggestion of questions, pleasse feel free to send me an email to chiholiu10@gmail.com

export default function employees() {
      
    const users = JSON.parse(window.localStorage.users);
    const employeesButton = document.querySelectorAll('.employees_button')


      for (let i = 0; i < employeesButton.length; i++) {
        employeesButton[i].addEventListener('click', () => {
            hideElements('main');
        document.querySelector('.pagination').style.display = 'block';
        });
    }

   const prevButton = document.getElementById('button_prev');
   const nextButton = document.getElementById('button_next');
   
   let current_page = 1;
   let records_per_page = 10;
   
   
 changePage(1);
 pageNumbers();
 selectedPage();
 clickPage();
  
   
  prevButton.addEventListener('click', () => {
     if(current_page > 1) {
         current_page--;
         changePage(current_page);
     }
 });
  nextButton.addEventListener('click', () => {
     if(current_page < numPages()) {
         current_page++;
         changePage(current_page);
     } 
 });  


 
   
         
  function selectedPage () {
       let page_number = document.getElementById('page_number').getElementsByClassName('clickPageNumber'); 
       for (let i = 0; i < page_number.length; i++) {
           if (i == current_page - 1) {
               page_number[i].style.opacity = "1.0";
           } 
           else {
               page_number[i].style.opacity = "0.5";
           }
       }   
   }  
   
   function checkButtonOpacity () {
     current_page == 1 ? prevButton.classList.add('opacity') : prevButton.classList.remove('opacity');
     current_page == numPages() ? nextButton.classList.add('opacity') : nextButton.classList.remove('opacity');
   }

   function changePage (page) {
       const listingTable = document.getElementById('listingTable');

       if (page < 1) {
           page = 1;
       } 
       if (page > (numPages() -1)) {
           page = numPages();
       }
    
       listingTable.innerHTML = "";

       for(let i = (page -1) * records_per_page; i < (page * records_per_page) && i < users.length; i++) {
           
           if (!users[i].isAdmin){
            const username = users[i].name.charAt(0).toUpperCase() + users[i].name.slice(1)
            const user = document.createElement('div');
            user.classList.add('objectBlock');
            user.innerText = `${username} Core Skill: ${users[i].coreSkill}`;
            listingTable.appendChild(user)
           }
           
       }
       checkButtonOpacity();
       selectedPage();
   }

   

    

   function clickPage () {
       document.addEventListener('click', function(e) {
           if(e.target.nodeName == "SPAN" && e.target.classList.contains("clickPageNumber")) {
               current_page = e.target.textContent;
               changePage(current_page);
           }
       });
   }

   function pageNumbers () {
       let pageNumber = document.getElementById('page_number');

       for(let i = 1; i < numPages() + 1; i++) {
           const num = document.createElement('span')
           num.classList.add('clickPageNumber')
           num.innerText = i
           pageNumber.appendChild(num)
       }
   }

   function numPages     () {
       return Math.ceil(users.length / records_per_page);  
   }

   function hideElements(section) {
    let arr = document.querySelectorAll(section + ' > *');
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.display = 'none';
    }
}
}


