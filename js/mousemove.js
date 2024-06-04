window.onload = () => {

    let x = 0;
    let y = 0;

    let targetX = 0;
    let targetY = 0;
    const speed = 0.5;

    const cursorItem = document.querySelector(".cursorItem");
    const circle = cursorItem.querySelector(".circle");
    const buttonAll = document.querySelectorAll(".menu-text,.delete-btn, .msg-input, .msg-close-btn, canvas");

    buttonAll.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            circle.style.transform = "scale(.5)";
            circle.style.backgroundColor = "rgba(255, 255, 255, 1)";
            
        });
        item.addEventListener("mouseleave", () => {
            circle.style.transform = "scale(1)";
            circle.style.backgroundColor = "black";
        });
    });

    window.addEventListener("mousemove", (e) => {
        x = e.pageX;
        y = e.pageY;
    });

    const loop = () => {
        targetX += (x - targetX) * speed;
        targetY += (y - targetY) * speed;
        
        cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;

        window.requestAnimationFrame(loop);
    };
    loop();
}