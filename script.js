const nav = document.querySelector('.nav') 
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
} else {
        nav.classList.remove('active')
    }
}

function myButton(){
    let myButton = "This Page is still on the Developing Process";
    alert(myButton)}
   
   document.getElementById("myButton").onclick = function(){
       alert("This Page is still on the Developing Process");
    }
   
    const element = document.getElementById("myDiv")
    function doSomething()
    {element.style.background = "green";}

    // Alert Button
    // Get the root element
var r = document.querySelector(':root');

// Create a function for getting a variable value
function myAlert_get() {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
  // Alert the value of the --blue variable
  alert("The value of --blue is: " + rs.getPropertyValue('--blue'));
}

// Create a function for setting a variable value
function myFunction_set() {
  // Set the value of variable --blue to another value (in this case "lightblue")
  r.style.setProperty('--blue', 'lightblue');
}
document.getElementById("myAlert").onclick = function(){
  alert("If your guess color is = black color click OK! Els skip");

let person = prompt("Which means....", "You Win Els you Lose");
let text;
if (person == null || person == "fff") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "! How are you today?";
}
}

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMen.classList.contains('open')

  toggleBtnIcon.classList = isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}