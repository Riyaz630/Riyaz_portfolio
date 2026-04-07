const navbar=document.querySelector(".nav-bar")
const bar=document.querySelector(".bar")
const item=document.querySelector(".items")
const li=document.getElementsByTagName("ul")


bar.addEventListener("click",()=>{
    item.classList.toggle("active")
})
item.addEventListener("click",()=>{
    item.classList.toggle("active")
})