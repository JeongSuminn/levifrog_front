window.addEventListener('DOMContentLoaded', function () {
    const menu_info = document.querySelector('.menu-info');
    const menu_guest = document.querySelector('.menu-guest');
    const msg_container = document.querySelector('.msg-container');
    const msg_close_btn = document.querySelector('.msg-close-btn');
    const msg_components = document.querySelectorAll('#msg-components');
    const menu_text = document.querySelectorAll('#menu-text');
    const upper_text =  document.querySelector('.upper-text');
    const canvas = document.querySelector('canvas');
    const info_wrapper = document.querySelector('.info-wrapper');

    msg_components.forEach(element => {
        element.style.visibility = 'hidden';
    });
    info_wrapper.style.display = 'none';

    menu_info.addEventListener('click', function() {
        menu_text.forEach(element => {
            element.style.display = 'none';
        });
        msg_container.classList.add('clicked');
        canvas.style.display = 'none';
        upper_text.style.display = 'none';
        msg_close_btn.style.visibility = 'visible';
        info_wrapper.style.display = 'block';
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
        }, 200);
        canvas.style.display = 'none';
        upper_text.style.display = 'none';
        info_wrapper.style.display = 'none';
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
        upper_text.style.display = 'block';
        info_wrapper.style.display = 'none';
    });
});