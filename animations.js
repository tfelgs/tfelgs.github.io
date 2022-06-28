// create instance of kinet with custom settings
var kinet = new Kinet({
    acceleration: 0.21,
    friction: 0.56,
    names: ["x", "y"],
});
var kinet2 = new Kinet({
    acceleration: 0.21,
    friction: 0.65,
    names: ["x", "y"],
});
var kinet3 = new Kinet({
    acceleration: 0.21,
    friction: 0.70,
    names: ["x", "y"],
});

// select circle element
var circle = document.getElementById('circle');
var circle2 = document.getElementById('circle2');
var circle3 = document.getElementById('circle3');


// set handler on kinet tick event
kinet.on('tick', function (instances) {
    circle.style.transform = `translate3d(${(instances.x.current)}px, ${(instances.y.current)}px, 0) rotateX(${(instances.x.velocity / 2)}deg) rotateY(${(instances.y.velocity / 2)}deg)`;
});
kinet2.on('tick', function (instances) {
    circle2.style.transform = `translate3d(${(instances.x.current)}px, ${(instances.y.current)}px, 0) rotateX(${(instances.x.velocity / 2)}deg) rotateY(${(instances.y.velocity / 2)}deg)`;
});
kinet3.on('tick', function (instances) {
    circle3.style.transform = `translate3d(${(instances.x.current)}px, ${(instances.y.current)}px, 0) rotateX(${(instances.x.velocity / 2)}deg) rotateY(${(instances.y.velocity / 2)}deg)`;
});

// call kinet animate method on mousemove
document.addEventListener('mousemove', function (event) {
    kinet.animate('x', event.clientX - window.innerWidth / 2);
    kinet.animate('y', event.clientY - window.innerHeight / 2);
});
document.addEventListener('mousemove', function (event) {
    kinet2.animate('x', event.clientX - window.innerWidth / 2);
    kinet2.animate('y', event.clientY - window.innerHeight / 2);
});
document.addEventListener('mousemove', function (event) {
    kinet3.animate('x', event.clientX - window.innerWidth / 2);
    kinet3.animate('y', event.clientY - window.innerHeight / 2);
});



