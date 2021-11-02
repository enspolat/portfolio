const btnButton = document.getElementById('btn');
const toDoContainer = document.getElementById('toDoContainer');
const input = document.getElementById('input');

btnButton.addEventListener('click', function(){
    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = input.value;
    toDoContainer.appendChild(paragraph);
    input.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})