// create instance of kinet with custom settings
var kinet = new Kinet({
    acceleration: 0.21,
    friction: 0.60,
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
var kinet4 = new Kinet({
    acceleration: 0.21,
    friction: 0.75,
    names: ["x", "y"],
});
var kinet5 = new Kinet({
    acceleration: 0.21,
    friction: 0.78,
    names: ["x", "y"],
});
var kinet6 = new Kinet({
    acceleration: 0.21,
    friction: 0.80,
    names: ["x", "y"],
});

// select circle element
var circle = document.getElementById('circle');
var circle2 = document.getElementById('circle2');
var circle3 = document.getElementById('circle3');
var circle4 = document.getElementById('circle4');
var circle5 = document.getElementById('circle5');
var circle6 = document.getElementById('circle6');

// set handler on kinet tick event
kinet.on('tick', function (instances) {
    circle.style.transform = `translate3d(${(instances.x.current)}px, ${(instances.y.current)}px, 0) rotateX(${(instances.x.velocity / 2)}deg) rotateY(${(instances.y.velocity / 2)}deg)`;
    console.log(instances.x.current);
    console.log(instances.x.target);
    
});
kinet2.on('tick', function (instances) {
    circle2.style.transform = `translate3d(${(instances.x.current)}px, ${(instances.y.current)}px, 0) rotateX(${(instances.x.velocity / 2)}deg) rotateY(${(instances.y.velocity / 2)}deg)`;
});
kinet3.on('tick', function (instances) {
    circle3.style.transform = `translate3d(${(instances.x.current)}px, ${(instances.y.current)}px, 0) rotateX(${(instances.x.velocity / 2)}deg) rotateY(${(instances.y.velocity / 2)}deg)`;
});
kinet4.on('tick', function (instances) {
    circle4.style.transform = `translate3d(${(instances.x.current)}px, ${(instances.y.current)}px, 0) rotateX(${(instances.x.velocity / 2)}deg) rotateY(${(instances.y.velocity / 2)}deg)`;
});
kinet5.on('tick', function (instances) {
    circle5.style.transform = `translate3d(${(instances.x.current)}px, ${(instances.y.current)}px, 0) rotateX(${(instances.x.velocity / 2)}deg) rotateY(${(instances.y.velocity / 2)}deg)`;
});
kinet6.on('tick', function (instances) {
    circle6.style.transform = `translate3d(${(instances.x.current)}px, ${(instances.y.current)}px, 0) rotateX(${(instances.x.velocity / 2)}deg) rotateY(${(instances.y.velocity / 2)}deg)`;
});

// call kinet animate method on mousemove
document.addEventListener('mousemove', function (event) {
    kinet.animate('x', event.clientX - window.innerWidth / 2);
    kinet.animate('y', event.clientY - window.innerHeight / 2);
    kinet2.animate('x', event.clientX - window.innerWidth / 2);
    kinet2.animate('y', event.clientY - window.innerHeight / 2);
    kinet3.animate('x', event.clientX - window.innerWidth / 2);
    kinet3.animate('y', event.clientY - window.innerHeight / 2);
    kinet4.animate('x', event.clientX - window.innerWidth / 2);
    kinet4.animate('y', event.clientY - window.innerHeight / 2);
    kinet5.animate('x', event.clientX - window.innerWidth / 2);
    kinet5.animate('y', event.clientY - window.innerHeight / 2);
    kinet6.animate('x', event.clientX - window.innerWidth / 2);
    kinet6.animate('y', event.clientY - window.innerHeight / 2);
});
// document.addEventListener('scroll', function (event) {
//      kinet.animate('x', event.clientX - window.innerWidth / 2);
//   kinet.animate('y', event.clientY - window.innerHeight / 2);
// });

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}





