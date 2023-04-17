
const refs = {
    inputEl : document.getElementById('newTask'),
    formEl : document.querySelector('form'),
    taskListEl : document.querySelector('#taskList'),
    checkBox: document.querySelector('.checkbox'),
    list: document.querySelector('.completed')

} 

refs.formEl.addEventListener('submit',onSubmit )
refs.taskListEl.addEventListener('change', oncheckBox)
refs.taskListEl.addEventListener('click', onDelete)

function onSubmit(event) {
    event.preventDefault();

    if (refs.inputEl.value.length ===  0) {
        return   alert('Ведіть щось!!!!!!!!!!!!!!!!!!')
    } 
    refs.taskListEl.insertAdjacentHTML('afterbegin',`
    <li > 
    <input type="checkbox" class='checkbox'>
    <p>${refs.inputEl.value}</p>
    <button type="button">delete</button>
   
    </li> 
    `)
    refs.formEl.reset()
}
  

    function oncheckBox(event) {
        if (event.target.type === 'checkbox' ) {
            if (event.target.checked) {
                event.target.parentNode.classList.add('completed')
                
                
                } else {
                    event.target.parentNode.classList.remove('completed')
                }
            }
        }
       
    

function onDelete(event){
if (event.target.nodeName === 'BUTTON') {
    console.log( event.target.parentNode);
    event.target.parentNode.remove()
}
}

