var toDoItems=document.getElementsByClassName('to-do-items')[0];
var input=document.getElementById('input');
var trashIcon=document.getElementById('trash');
var deleteBtn=document.getElementById('deleteBtn');
var all=document.getElementById('all');

//to make the cursor auto focus when the page is reloaded
window.onload=input.focus();

input.addEventListener("keydown",function(event){
    if(event.key==="Enter")
    addItem();
});

function addItem(){
    //to hold the entire task
    var divParent=document.createElement("div");
    //to hold the icons in the task
    var divChild=document.createElement("div");
    var checkIcon=document.createElement("i");
    var trashIcon=document.createElement("i");
    if(input.value===''){
        alert("You must write something!");
    }else{

    divParent.className="item";
    //now we need to add another div to the parent div to hold the input value
    divParent.innerHTML='<div>'+input.value+'</div>';


    //now we have to create our two icons we will start by creating check Icon
    checkIcon.className="fas fa-check-square";
    checkIcon.style.color="lightgray";

    checkIcon.addEventListener('click',function(){
    checkIcon.style.color="limegreen";

    //we made class called done and defined it in css to have style of linethrough and red color then we called that class here
    divParent.classList.add('done');
    })

    divChild.appendChild(checkIcon);
    

    //we need to create trash icon by the same way

    trashIcon.className="fas fa-times-square";
    trashIcon.style.color="red";

    trashIcon.addEventListener('click',function(){
        divParent.remove();
    })
    divChild.appendChild(trashIcon);



    //now we need to append divchild to divparent
    divParent.appendChild(divChild);

    //finally we need to append divparent to toDoItems div to be able to see it on the screen
    toDoItems.appendChild(divParent);
     
    //to clear input field
    input.value='';

    //make the cursor focus again on input field after clearing input field
    input.focus();
}

}

//btn to clear all tasks at once
deleteBtn.addEventListener('click',function(){
    //empty the div which holds all tasks
    all.innerHTML=" ";
    //to make the cursor focus again after removing all items
    input.focus();
 })
