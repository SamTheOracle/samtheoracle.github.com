window.addEventListener('DOMContentLoaded', (event) => {
    const box = document.getElementsByTagName("box")[0]
    const wrapper = document.getElementsByClassName("laptop-wrapper")[0]
    
    setTimeout(() => {
        box.style.animation = 'start ease-in-out 1.5s 1'
        box.style.animationFillMode = 'forwards'
    },
    //text animation ends after 5s 
    5200);

    setTimeout(() => {
        wrapper.style.animation = 'visibilityOk ease-in-out 1.5s 1'
        wrapper.style.animationFillMode = 'forwards'
    },
    //text animation ends after 5s 
    5400);

});


