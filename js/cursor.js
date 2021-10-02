const cursor = document.querySelector('.cursor');
links = document.querySelectorAll('a');

document.addEventListener('mousemove', e => {

    cursor.setAttribute("style", "top: " + (e.pageY - 7.5) + "px; left: " + (e.pageX - 7.5) + "px;");
    
});

links.forEach(link => {
    
    link.addEventListener('mouseover', () => {
        
        cursor.classList.add('cursor_hover');
    
    });
    link.addEventListener('mouseleave', () => {

        cursor.classList.remove('cursor_hover');

    });
    
});

document.addEventListener('click', () => {

    cursor.classList.add("cursor_click");

    setTimeout(() => {

        cursor.classList.remove('cursor_click');

    }, 200);

});