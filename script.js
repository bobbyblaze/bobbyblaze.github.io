const cursor = document.querySelector('.cursor');
    const moveBy = 10;

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY-11)+"px; left: "+(e.pageX-11)+"px;");
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");
    
    setTimeout(() => {
    cursor.classList.remove("expand");
    }, 500)
})

// Get the modal
var modal = document.getElementById("contactModal");

// Get the button that opens the modal
var btn = document.getElementById("contactButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}