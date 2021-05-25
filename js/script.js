// Project 2

const test = document.querySelector(`.contact-list`);
const contacts = Array.from(document.querySelectorAll( `.contact-item.cf`));

// buttons calculation
const numOfButtons = Math.ceil(contacts.length / 10);
// max contacts for each button
const maxContacts = 10;
console.log(numOfButtons);

console.log(contacts);

contacts.map(contact => console.log(contact.innerHTML));

// dynamically create and insert the amount of buttons
let PtoButtons = "<div class='pagination'>"
 for(let x = 1; x <= numOfButtons; x++){
    PtoButtons += "<li><a href='#' id="+x+">"+x+"</a></li>";
 }
PtoButtons += '</div>';

const page = document.querySelector(`.page`);

// current page start
let currentPage = 1;

const links = document.querySelectorAll(`a`);
const linksArray = Array.from(links);


linksArray.map( link => addEventListener("click", function(event) {
    event.preventDefault();
    console.log(link.innerHTML);
    
}));

// create the list of contacts by page
function createList(Page){
    ptoList = "<div><ul class='list'>";
    for(let q = (Page-1)*10; q<(Page-1)*10+10; q++){
    ptoList += "<li class='contact-item cf'>"+ contacts[q].innerHTML + "</li>";
    }
    ptoList += "</ul></div>"

    return ptoList;
}

// hide
page.classList.toggle(`.contact-list`);

//list
page.insertAdjacentHTML(`beforeend`, createList(currentPage));
//buttons
page.insertAdjacentHTML(`beforeend`, PtoButtons);


