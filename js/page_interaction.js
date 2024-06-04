window.addEventListener('DOMContentLoaded', function () {
    const menu_guest = document.querySelector('.menu-guest');
    const msg_container = document.querySelector('.msg-container');
    const msg_close_btn = document.querySelector('.msg-close-btn');
    const msg_components = document.querySelectorAll('#msg-components');

    msg_components.forEach(element => {
        element.style.visibility = 'hidden';
    });

    menu_guest.addEventListener('click', function() {
        msg_container.classList.add('clicked');
        setTimeout(() => {
            msg_components.forEach(element => {
                element.style.visibility = 'visible';
            });
        }, 500);
    });
    msg_close_btn.addEventListener('click', function() {
        msg_container.classList.remove('clicked');
        msg_components.forEach(element => {
            element.style.visibility = 'hidden';
        });
    });
});