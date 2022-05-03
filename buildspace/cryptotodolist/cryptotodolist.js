let addBtnDOM = document.querySelector("#liveToastBtn");
addBtnDOM.addEventListener('click', AddTask);

let listDOM = document.querySelector("#list");
let taskDOM = document.querySelector("#task");
let ulelements = document.getElementsByTagName("li")

function AddTask(){

    let liDOM = document.createElement('li');
    listDOM.appendChild(liDOM);
    liDOM.innerHTML = taskDOM.value;
    taskDOM.value = "";
    
    liDOM.onclick = check;
        
    let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        
        liDOM.append(closeButton);
        listDOM.append(liDOM);
        inputElement.value = ("");
}

for (var i=0; i<ulelements.length; i++){
    let closebutton = document.createElement("span");
    closebutton.textContent = '\u00D7';
    closebutton.classList.add("close");
    closebutton.onclick = removeButton;
    ulelements[i].append(closebutton);
    ulelements[i].onclick = check;
}

function check(){
    this.classList.toggle("checked");
}

function removeButton(){
    this.parentElement.remove();
}
