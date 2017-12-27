function inSoChan() {
    for(let i = 0; i <= 100; i++) {
        const dk = i % 2 === 0;
        if (dk) console.log(i);
    }
}

function inSoLe() {
    for(let i = 0; i <= 100; i++) {
        const dk = i % 2 === 1;
        if (dk) console.log(i);
    }
}

function inSoChia3Du1() {
    for(let i = 0; i <= 100; i++) {
        const dk = i % 3 === 1;
        if (dk) console.log(i);
    }
}

function inSoChinhPhuong() {
    for(let i = 0; i <= 100; i++) {
        const dk = Math.sqrt(i) % 1 === 0;
        if (dk) console.log(i);
    }
}

function inSo(fn) {
    for(let i = 0; i <= 100; i++) {
        const dk = fn(i);//kiemTraSoChinhPhuong(i);
        if (dk) console.log(i);
    }
}

function kiemTraSoChinhPhuong(x) {
    return Math.sqrt(x) % 1 === 0;
}

function kiemTraSoChan(x) {
    return x % 2 === 0;
}

function kiemTra(x) {
    return x % 2 === 0 || x % 3 === 0;
}

inSo(kiemTra);

// inSoChia3Du1();

// function inSo(soBiChia, soDu) {
//     for(let i = 0; i <= 100; i++) {
//         const dk = i % soBiChia === soDu;
//         if (dk) console.log(i);
//     }
// }

// inSoChinhPhuong();
