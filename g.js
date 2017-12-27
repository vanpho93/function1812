function inSo(fn) {
    for(let i = 0; i <= 100; i++) {
        const dk = fn(i);//kiemTraSoChinhPhuong(i);
        if (dk) console.log(i);
    }
}

inSo(function(x) {
    return x % 2 === 0;
});

inSo(function(x) {
    return x % 2 === 1;
});

inSo(function(x) {
    return Math.sqrt(x) % 1 === 0;
});
