let cloud_left = document.getElementById('cloud_left');
let cloud_right = document.getElementById('cloud_right');
let rocket = document.getElementById('rocket');
let plane = document.getElementById('plane');

plane.style.left = '-1450px';

window.addEventListener('scroll', () => {
    let value = window.scrollY
    cloud_left.style.left = value * -2 + 'px';
    cloud_right.style.left = value * -2 + 'px';
    rocket.style.top = value * -1 + 'px';
    if (plane.style.left < 0 + 'px') {
        plane.style.left = value * 3 - 1450 + 'px';
    } else {
        plane.style.left = -1450 + 'px';
    }
});