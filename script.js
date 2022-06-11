


let enterButton = document.getElementById("add");
let input=document.getElementById("in");
let ul = document.querySelector("ul");
let item=document.getElementsByTagName("li");

function inputLength(){
    return input.value.length;
}

function listLength(){
    return item.length;
}
function createListElement(){
	let li = document.createElement("li"); // creates an element "li"
    li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
	ul.appendChild(li); 
    //adds li to ul
	input.value = ""; //Reset text input field

   

    let dBtn=document.createElement("button");
    dBtn.append(document.createTextNode("X"));
    dBtn.style.margin="10px 50px";
    dBtn.classList.add("test");
    li.appendChild(dBtn);
    dBtn.addEventListener("click",deleteListItem);

    function deleteListItem(){
        li.classList.add("delete");
    }

}

function addListAfterClick(){
    if(inputLength()>0){
        createListElement();
    }
}

function addListAfterEnter(event){
    if(inputLength()>0 && event.which===13){
        createListElement();
    }
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress",addListAfterEnter);

