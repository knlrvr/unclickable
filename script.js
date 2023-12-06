const buttonHeight = 50;
const buttonWidth = 150;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button');

    button.addEventListener('click', () => {
        console.log('what the heck');
    });

    button.addEventListener('mouseover', () => {

        // reset
        button.style.animation = 'none';

        // force reflow to apply style changes immediately
        button.offsetHeight;

        // basic movement of button
        button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';

        // spring movement of button
        button.style.animation = `spring 400ms ease forwards`;
    }); 
});