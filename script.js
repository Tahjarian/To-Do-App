let date = document.getElementById('date')
let name = document.getElementById('name')
let custBody = document.getElementById('cust-body')
let custFooter = document.getElementById('cust-footer')
let footerTitle = document.getElementById('footer-title')
let addNoteButton = document.getElementById('addNotes')
let reminderInput = document.getElementById('reminderInput')
let postNoteButton = document.getElementById('postNote')
let reminders = [];

// Add Date
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
date.innerHTML = `${today}`
date.style.letterSpacing = '1px'
name.innerHTML = 'My Reminders'
name.style.letterSpacing = '1px'


addNoteButton.addEventListener('click', () => {
    custBody.innerHTML = '<p style="font-style: italic;">You have no reminders!</p>' 
    reminderInput.style.display = 'inline'
    postNote.style.display = 'inline'
    custBody.style.padding = '70px 20px 70px 20px'
    footerTitle.style.display = 'block'
})

postNoteButton.addEventListener('click', () => {
    custBody.innerHTML = ''
    reminders.push(reminderInput.value)
    console.log(reminders)
    reminderInput.value = ''
    custBody.style.textAlign = 'left'
    custBody.style.padding = '20px 20px'
    function remindersDisplay() {
        for (i = 0; i < reminders.length; i++) {
            custBody.innerHTML += `<ul><li style="font-style: italic;">${reminders[i]}</li></ul>`;
        }
        let reminderItems = document.querySelectorAll('li');
        reminderItems.forEach((reminderItem, index) => {
            reminderItem.style.cursor = 'pointer'
            reminderItem.classList.add('completed')
            reminderItem.addEventListener('click', () => {
                reminders.splice(index, 1)
                custBody.innerHTML = ''
                remindersDisplay();
            })
        })
        if (custBody.innerHTML == '') {
            custBody.innerHTML = '<p style="font-style: italic;">You have no reminders!</p>' 
            custBody.style.padding = '70px 20px 70px 20px'
            custBody.style.textAlign = 'center'
        }
    }
    remindersDisplay();
})