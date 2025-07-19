// const header = document.getElementById("head")
// console.log(header)

// const txt = document.getElementsByClassName("text");
// console.log(txt)

//Exercise #32 querySelector and querySelectorAll

// const header = document.querySelector("#head")
// console.log(header)
// const text = document.querySelectorAll(".text")
// console.log(text)


//Exercise #33
// function change() {
//   head.textContent = "Welcome to the DOM";

// }
// function changeContent() { subject.innerHTML = "PHYTHONE"; }

//Add and removing items 

// function addItem() {
//   const list = document.querySelector("#list");
//   const newItem = document.createElement("li");
//   newItem.textContent = "item 5";
//   list.appendChild(newItem);
// }

//Exercise #34
const list = document.querySelector("#list")

function addItem() {
  const newItem = document.createElement("li")
  newItem.textContent = "Item5"
  list.appendChild(newItem);
    
}
  

function remove() {
  if (list.lastChild) {
     list.removeChild(list.lastChild);
  }
  else {
alert(" It is End")
 }
  
}