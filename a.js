const a = console.log;
a(1);

const add = function(a, b) {
    console.log(a + b);
}

const add2 = add;

add2(10, 1);
