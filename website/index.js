var input = document.getElementById("input")
var button = document.getElementById("button")
var followers = document.getElementById("followers")
var list = document.getElementById("list")

const inputLength = () =>{
    console.log('Hello Emmett')
    console.log(input.value.length)
    return(input.value.length)
}
const createListItem = () =>{
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    list.appendChild(li)
    input.value = '';
}

const addtaskwithClick = (event) => {
    if (inputLength() >0) {
        createListItem();
    }
}

button.addEventListener('click',addtaskwithClick)