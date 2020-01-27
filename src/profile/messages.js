export default function messages() {
  const users = JSON.parse(window.localStorage.users);

  let user;
  let userSentMessages;
  let userInboxMessages;

  const forms = document.forms;

  const sentMessagesBlock = document.getElementById('message-list_sent');
  const inboxMessagesBlock = document.getElementById('message-list_inbox');
  const sentMessagesList = document.querySelector('#message-list_sent ul');
  const inboxMessagesList = document.querySelector('#message-list_inbox ul');
  const selectListMessage = document.getElementById('select_message');

  const messagesButton = document.querySelectorAll('.messages_button');
  const addMessage = document.getElementById('add_message_button');

//check if users exist
  if (users) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].loggedIn == true) {
        user = users[i];
        userSentMessages = users[i].messages.sentMessages;
        userInboxMessages = users[i].messages.inboxMessages;
        showMessages(userSentMessages, sentMessagesList);
        showMessages(userInboxMessages, inboxMessagesList);
        break;
      }
    }
  }

  
  for (let i = 0; i < messagesButton.length; i++) {
    messagesButton[i].addEventListener('mousedown', () => {
         hideElements('main')
    document.getElementById('messages_wrapper').style.display = 'block';
    });
}

//fill select forms
  for (let i = 0; i < users.length; i++) {
    if (users[i].loggedIn == false) {
      fillSelectList(selectListMessage, i);
    } else if (users[i].loggedIn == false) {
      fillSelectList(selectListMessage, i);
    }
  }

  // add messages
  addMessage.addEventListener('click', (e) => {
    e.preventDefault();

    // create elements
    const subject = document.createElement('span');
    const subjectValue = document.getElementById('message_subject').value;
    const contributors = document.createElement('p');
    contributors.textContent = 'To: ';

    const message = document.createElement('p');
    const messageShort = document.createElement('span');
    const messageBody = document.createElement('div');
    const messageValue = document.getElementById('message_text').value;

    const li = document.createElement('li');
    const deleteButton = document.createElement('span');

    const date = document.createElement('span');
    const options = {
      month: 'short',
      day: 'numeric',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    };
    const dateTime = new Date().toLocaleString('en-US', options).toString();

    const selected = Array.from(selectListMessage.options)
      .filter(option => option.selected)
      .map(option => option.value.charAt(0).toLowerCase() + option.value.slice(1));

    if (messageValue && selected.length > 0) {
      // add text content and create message for localstorage
      let tempMessage = {};
      tempMessage.contributors = [];
      tempMessage.status = 'unseen';
      tempMessage.fromWhom = user.name;
      tempMessage.date = dateTime;
      if (subjectValue) {
        subject.textContent = `Subject: ${subjectValue}`;
      } else if (!subjectValue) {
        subject.textContent = '(no subject)';
      }
      tempMessage.subject = subject.textContent;
      tempMessage.message = messageValue;
      message.textContent = messageValue;
      messageShort.textContent = messageValue;
      date.textContent = dateTime;
      deleteButton.textContent = 'delete';

      selected.forEach(option => {
        for (let i = 0; i < users.length; i++) {
          if (users[i].name == option) {
            users[i].messages.inboxMessages.push(tempMessage);
          }
        }
        tempMessage.contributors.push(option);
        contributors.textContent += `${option} `;
      });

      // add classes
      date.classList.add('date');
      deleteButton.classList.add('delete');
      li.classList.add('message');
      li.classList.add('unseen');
      messageBody.classList.add('hide_message');

      // append to DOM
      li.appendChild(date);
      li.appendChild(subject);
      li.appendChild(messageShort);
      
      li.appendChild(deleteButton);
      messageBody.appendChild(contributors);
      messageBody.appendChild(message);
      li.appendChild(messageBody);
      sentMessagesList.appendChild(li);

      document.getElementById('message_text').value = '';
      document.getElementById('message_subject').value = '';

      user.messages.sentMessages.push(tempMessage);
      window.localStorage.users = JSON.stringify(users);
    }
  });

  //show sent messages or inbox
  let sentButton = document.getElementById('sent_message_button');
  let inboxButton = document.getElementById('inbox_message_button');

  sentButton.addEventListener('click', (e) => {
    e.preventDefault();
    inboxMessagesBlock.className = 'messages_invis';
    sentMessagesBlock.className = '';
  });

  inboxButton.addEventListener('click', (e) => {
    e.preventDefault();
    sentMessagesBlock.className = 'messages_invis';
    inboxMessagesBlock.className = '';  
  });

  // delete message
  sentMessagesList.addEventListener('click', (e) => {
    deleteMessages(userSentMessages, e);
    hideMessageBody(userSentMessages, e);
  });

  inboxMessagesList.addEventListener('click', (e) => {
    deleteMessages(userInboxMessages, e);
    hideMessageBody(userInboxMessages, e);
  });

  function deleteMessages(userMessages, e) {
    if (e.target.className == 'delete') {
      const message = e.target.parentElement;
      const messagesList = message.parentElement;
      const index = Array.from(messagesList.children).indexOf(message);
      messagesList.removeChild(message);
      userMessages.splice(index, 1);
      window.localStorage.users = JSON.stringify(users);
    }
  }

  //hide message body
  function hideMessageBody(userMessages, e) {
    if (e.target.className == 'message unseen') {
      const messagesList = e.target.parentElement;
      const index = Array.from(messagesList.children).indexOf(e.target);
      if (
        messagesList.parentElement.getAttribute('id') == 'message-list_inbox'
      ) {
        e.target.classList.remove('unseen');
        e.target.classList.add('seen');
        userMessages[index].status = 'seen';
      }
      e.target.childNodes[2].classList.toggle('hide_message');
      e.target.lastChild.classList.toggle('hide_message');
      window.localStorage.users = JSON.stringify(users);
    } else if (e.target.className == 'message seen') {
      e.target.lastChild.classList.toggle('hide_message');
      e.target.childNodes[2].classList.toggle('hide_message');
    }
  }

  // filter messages
  const searchBarMessages = forms['search-messages'].querySelector('input');
  searchBarMessages.addEventListener('keyup', (e) => {
    const searchInput = e.target.value.toLowerCase();

    let messages = Array.from(sentMessagesList.getElementsByTagName('li'));
    const inboxMessages = Array.from(
      inboxMessagesList.getElementsByTagName('li')
    );
    messages = messages.concat(inboxMessages);
    messages.forEach(message => {
      let messageSubject = message.childNodes[1].textContent;
      if(messageSubject == '(no subject)') {
        messageSubject = '';
      } 
      else messageSubject = message.childNodes[1].textContent.slice(9);
      const messageBody = message.childNodes[2].textContent;
      console.log(messageSubject)
      if (
        messageSubject.toLowerCase().indexOf(searchInput) != -1 ||
        messageBody.toLowerCase().indexOf(searchInput) != -1
      ) {
        message.style.display = 'block';
      } else {
        message.style.display = 'none';
      }
    });
  });

  //show and hide seen and unseen messages
  const unseenCheckBox = document.getElementById('unseen');
  const seenCheckBox = document.getElementById('seen');

  unseenCheckBox.addEventListener('click', () => {
    hideMessages(unseenCheckBox, 'unseen');
  });

  seenCheckBox.addEventListener('click', () => {
    hideMessages(seenCheckBox, 'seen');
  });

  function hideMessages(checkBox, status) {
    const messages = Array.from(inboxMessagesList.getElementsByTagName('li'));
    if (checkBox.checked) {
      messages.forEach(message => {
        if (message.className == 'message ' + status) {
          message.style.display = 'block';
        }
      });
    } else if (!checkBox.checked) {
      messages.forEach(message => {
        if (message.className == 'message ' + status) {
          message.style.display = 'none';
        }
      });
    }
  }

  function fillSelectList(selectList, i) {
    const option = document.createElement('option');
    const userName = users[i].name.charAt(0).toUpperCase() + users[i].name.slice(1)
    option.innerText = userName;
    selectList.appendChild(option);
    if (users.length <= 23) {
      selectList.setAttribute('size', users.length - 1);
    } else if (users.length > 22) {
      selectList.setAttribute('size', '22');
    }
  }
//show messages onload
  function showMessages(userMessages, inboxOrSent) {
    if (userMessages) {
      for (let i = 0; i < userMessages.length; i++) {
        let fromWhom;

        if (userMessages[i].fromWhom !== user.name) {
          fromWhom = document.createElement('p');
          fromWhom.textContent = `From: ${userMessages[i].fromWhom}`;
        }
        // create elements
        const subject = document.createElement('span');
        const subjectValue = userMessages[i].subject;
        const contributors = document.createElement('p');
        contributors.textContent = 'To: ';

        const message = document.createElement('p');
        const messageValue = userMessages[i].message;
        const messageShort = document.createElement('span');
        const messageBody = document.createElement('div');

        const li = document.createElement('li');
        const deleteButton = document.createElement('span');
        const date = document.createElement('span');

        // add text content

        subject.textContent = subjectValue;
        message.textContent = messageValue;
        messageShort.textContent = messageValue;
        deleteButton.textContent = 'delete';
        date.textContent = userMessages[i].date;

        userMessages[i].contributors.forEach(option => {
          contributors.textContent += `${option} `;
        });

        // add classes
        deleteButton.classList.add('delete');
        date.classList.add('date');
        li.classList.add('message');
        li.classList.add(userMessages[i].status);
        messageBody.classList.add('hide_message');

        // append to DOM
        li.appendChild(date);
        li.appendChild(subject);
        li.appendChild(messageShort);
        
        li.appendChild(deleteButton);
        if (fromWhom) {
          messageBody.appendChild(fromWhom);
        }
        messageBody.appendChild(contributors);
        messageBody.appendChild(message);
        li.appendChild(messageBody);
        inboxOrSent.appendChild(li);
      }
    }
  }
//function for showing messages
  function hideElements(section) {
    let arr = document.querySelectorAll(section + ' > *');
    for (let i = 0; i < arr.length; i++) {
      arr[i].style.display = 'none';
    }
  }
}
