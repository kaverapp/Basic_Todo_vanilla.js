
//dom select
const uinput = document.querySelector(".uinp");
const ubtn = document.querySelector(".ubtn");
const h = document.querySelector("ul");
const delbtn = document.querySelector(".delbtn");
//todos main control  function or work
function todo() {
    inp();
    clearAllbutn();
}


//work for taking input
function inp() {
    ubtn.addEventListener("click", () => {

        if(!uinput.value==""){
        const li = document.createElement("li");
        
        const del = delet(li);
        inpo(li, del);
        uinput.value = "";
        }
        else{
            alert("enter the todo,"+"no empty todo is allowed")
        }
    });
}


//work for displaying the input on browser
function inpo(li, del) {
    
    li.appendChild(document.createTextNode(uinput.value));
    
    li.appendChild(del);
    showdate_time(li)
    h.appendChild(li);
}



//work for deleting the input on browser one by one
function delet(li) {
    const tag = document.createElement("button");
    tag.textContent = "delete";

    tag.addEventListener("click", function () {
        li.remove();
    });
    return tag;
}


//work for date and time display on browser
function showdate_time(li){
    const timest=document.createElement("button")
    timest.textContent="show";
    const now = new Date();

    let alreadyShown = false; // Flag variable to track if timestamp and datetime input have been shown


    timest.addEventListener("click",function(e){
        if (!alreadyShown) { // Check if timestamp and datetime input have not been shown yet

    const dat_set = document.createElement("input");
    dat_set.type="datetime-local"
    const timestamp = document.createElement("span");
    timestamp.textContent = now;
    timestamp.style.fontSize="10px"
    timestamp.style.backgroundColor="skyblue"
    li.appendChild(timestamp);
    li.appendChild(dat_set);
    alreadyShown = true; // Update flag variable to indicate that timestamp and datetime input have been shown
        
    }
    })
   
    
    li.appendChild(timest);
}


//work for deleting the input on browser all
function clearAllbutn() {
    delbtn.addEventListener("click", function () {
        h.innerHTML = "";
    });
}


todo();
