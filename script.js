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