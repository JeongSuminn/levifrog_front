window.addEventListener('DOMContentLoaded', function () {
    const menu_info = document.querySelector('.menu-info');
    const menu_guest = document.querySelector('.menu-guest');
    const msg_container = document.querySelector('.msg-container');
    const msg_close_btn = document.querySelector('.msg-close-btn');
    const msg_components = document.querySelectorAll('#msg-components');
    const menu_text = document.querySelectorAll('#menu-text');
    const canvas = document.querySelector('canvas');

    msg_components.forEach(element => {
        element.style.visibility = 'hidden';
    });

    menu_info.addEventListener('click', function() {
        menu_text.forEach(element => {
            element.style.display = 'none';
        });
        msg_container.classList.add('clicked');
        canvas.style.display = 'none';
        msg_close_btn.style.visibility = 'visible';
    });

    menu_guest.addEventListener('click', function() {
        menu_text.forEach(element => {
            element.style.display = 'none';
        });
        msg_container.classList.add('clicked');
        setTimeout(() => {
            msg_components.forEach(element => {
                element.style.visibility = 'visible';
            });
        }, 500);
        canvas.style.display = 'none';
    });
    msg_close_btn.addEventListener('click', function() {
        msg_container.classList.remove('clicked');
        msg_components.forEach(element => {
            element.style.visibility = 'hidden';
        });
        menu_text.forEach(element => {
            element.style.display = 'flex';
        });
        canvas.style.display = 'block';
    });
});