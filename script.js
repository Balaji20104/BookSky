var popuplayout=document.querySelector(".popuplayout")
var popupbox = document.querySelector(".popupbox")
var addpopup=document.getElementById("addpopup")



addpopup.addEventListener("click",function(){
    popuplayout.style.display="block"
    popupbox.style.display="block"
})

var cancelbook=document.getElementById("cancelbook")
cancelbook.addEventListener('click',function(event){
    event.preventDefault()
    popuplayout.style.display="none"
    popupbox.style.display="none"
})

var addbook=document.getElementById("addbook")
var container=document.querySelector(".container")
var booktitle=document.getElementById("booktitle")
var bookauthor=document.getElementById("bookauthor")
var bookdiscription=document.getElementById("bookdiscription")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${booktitle.value}</h1>
    <h5>${bookauthor.value}</h5>
            <p>${bookdiscription.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popuplayout.style.display="none"
    popupbox.style.display="none"
    alert("your book was added")
})

function deletebook(event){
    event.target.parentElement.remove()
    alert("your book was deleted")

}