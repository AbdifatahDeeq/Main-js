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
// const list = document.querySelector("#list")

// function addItem() {
//   const newItem = document.createElement("li")
//   newItem.textContent = "Item5"
//   list.appendChild(newItem);
    
// }
  

// function remove() {
//   if (list.lastChild) {
//      list.removeChild(list.lastChild);
//   }
//   else {
// alert(" It is End")
//  }
  
// }

// function change() {
//   const image = document.querySelector("#images");
//   image.setAttribute(
//     "src",
//     "https://images.unsplash.com/photo-1751378679063-cbd774c0f973?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"
//   );
// }

// function change() {
//   const image = document.querySelector("#images")
//   const url = prompt("import Your image")
//   image.setAttribute("src", url)
//   image.Style.width ="100px"

// // element.style.
//     image.style.border = '2px solid red';
//     image.style.padding = "10px";
//     // background-color

//     image.style.backgroundColor = '#cfc2dc';

// }


// function changeContentStyle() {

//     const header = document.querySelector("#header");
//     const text = document.querySelector(".text");

//     // font-size
//     header.style.color = "skyblue";
//     text.style.padding = "20px";
//     text.style.border = "1px solid black";
//     text.style.fontSize = "30px";
// }
// const h1 = document.querySelector("h1");

// function lightMode() {
//   document.body.style.backgroundColor = ""
//   document.body.style.color = "black"

  
// h1.textContent = " The background is changed for light mode";
// }
// function darkMode() {
//   document.body.style.backgroundColor = "black"
//   document.body.style.color = "white"
//   h1.textContent = "The background is change for dark mode";
  
// }

function Change() {
  const image = document.querySelector(".image");
  const url = prompt("upload the image")
  image.setAttribute("src", url)
  const width = prompt("Enter the image width (e.x, 200px):");
  image.style.width = width;
  const padding = prompt("Enter the image padding (e.x, 10px )");
  image.style.padding = padding;
  const margin = prompt("Enter the image marging (e.x, 10px )");
  image.style.margin = margin;
  const border = prompt("Enter the image border (e.g., 2px solid black):");
  image.style.border = border;
  const p = document.querySelector("p")
  p.textContent= "The uploaded image has been modified"
}