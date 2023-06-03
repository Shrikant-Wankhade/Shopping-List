
const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearButton = document.getElementById("clear");
const itemFilter = document.getElementById("")
const items = itemList.querySelectorAll("li")


function addItem(e) {
    e.preventDefault();
    //ValidateInput
    const newItem = itemInput.value;
    if(newItem === ""){
        alert("PLease add an item");
        return;
    }
    // Create list Item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));
    const button = createButton("remove-item btn-link text-red");
    li.appendChild(button);

    itemList.appendChild(li);
    itemInput.value = "";
    
}

function createButton(classes){
    const button = document.createElement('button')
    button.className = classes;
    const icon = createIcon("fa-solid fa-xmark");
    button.appendChild(icon);
    return button;
}

function createIcon(classes){
    const icon = document.createElement("i");
    icon.className = classes;
    return icon;
}

function removeItem(e) {
    if(e.target.parentElement.classList.contains("remove-item")){
        e.target.parentElement.parentElement.remove();
    }
}

function clearItems() {
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
}

function checkUI(){
    if(items.length === 0){

    }
}

//Vevent listeners
itemForm.addEventListener("submit",addItem);
itemList.addEventListener("click", removeItem);
clearButton.addEventListener("click", clearItems);



