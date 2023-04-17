
const refs = {
    inputEl : document.getElementById('newTask'),
    formEl : document.querySelector('form'),
    taskListEl : document.querySelector('#taskList'),
    checkBox: document.querySelector('.checkbox'),
    list: document.querySelector('.completed')

} 

refs.formEl.addEventListener('submit',onSubmit )
function onSubmit(event) {
    event.preventDefault();

    if (refs.inputEl.value.length ===  0) {
        return   alert('Ведіть щось!!!!!!!!!!!!!!!!!!')
    } 
    refs.taskListEl.insertAdjacentHTML('afterbegin',`
    <li class='completed '> 
    <input type="checkbox" class='checkbox'>
    <p>${refs.inputEl.value}</p>
    <button type="button">delete</button>
   
    </li> 
    `)
    refs.formEl.reset()
  const checkBox = document.querySelector('.checkbox')
  const  list = document.querySelector('.completed')
    checkBox.addEventListener('change', oncheckBox)
    function oncheckBox() {
        if (checkBox.checked === true) {
        list.classList.add('completed')
        } else {
            list.classList.remove('completed')
        }
    }
    


}
