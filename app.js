 //const sidebar =document.getElementsByClassName("sidebar");
const sidebar =document.querySelector(".sidebar");
console.log(sidebar);
const closeButton=document.querySelector(".close-btn");
const toggleButton = document.querySelector(".sidebar-toggle");

toggleButton.addEventListener("click", function(){
   console.log(sidebar.classList);
   sidebar.classList.toggle("show-sidebar");
})

closeButton.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
})