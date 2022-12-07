// Ways to create and object

//factory function

function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);

//constructor function

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}



let x = 10;
let y = x;
console.log(x, y);
x = 20;
console.log(x, y);

let a = {value: 10};
let b = a;
console.log(a, b);
a.value = 20
console.log(a, b);

let number = 10;
function increase(number) {
    number++;
}
increase(number);
console.log(number);

let aNumber = { value: 10 };
function increase(aNumber) {
    aNumber.value++;
}
increase(aNumber);
console.log(aNumber);


//adding and removing
function Circle1(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle2 = new Circle1(10);
circle2.location = { x: 2};