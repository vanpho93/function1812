function inSo(fn) {
    for(let i = 0; i <= 100; i++) {
        const dk = fn(i);//kiemTraSoChinhPhuong(i);
        if (dk) console.log(i);
    }
}

// inSo(x => x % 2 === 0);

inSo(x => x % 2 === 1);

inSo(x => Math.sqrt(x) % 1 === 0);
