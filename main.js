var box = document.getElementById('box');
box.addEventListener('mouseover', () => {
    var ranH = Math.floor(Math.random() * 90) + 1;
    var ranW = Math.floor(Math.random() * 90) + 1;
    box.style.top = ranH + '%';
    box.style.left = ranW + '%';
})