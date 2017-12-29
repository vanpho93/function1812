function veHinh1(n) {
    for(let i = 1; i < n; i++) {
        let s = '';
        for(let j = 1; j < n; j++) {
            const dk = j <= i;
            s += dk ? '*' : ' ';
        }
        console.log(s);
    }
}

function veHinh2(n) {
    for(let i = 1; i < n; i++) {
        let s = '';
        for(let j = 1; j < n; j++) {
            const dk = j + i <= n;
            s += dk ? '*' : ' ';
        }
        console.log(s);
    }
}

function veHinh3(n) {
    for(let i = 1; i <= n; i++) {
        let s = '';
        for(let j = 1; j <= n; j++) {
            const trungTam = (n + 1) / 2;
            const kqX = Math.abs(j - trungTam);
            const kqY = Math.abs(i - trungTam);
            const dk = kqX + kqY < trungTam;
            s += dk ? '*' : ' ';
        }
        console.log(s);
    }
}

function veHinh(n, fn) {
    for(let i = 1; i <= n; i++) {
        let s = '';
        for(let j = 1; j <= n; j++) {
            const dk = fn(i, j, n);
            s += dk ? '*' : ' ';
        }
        console.log(s);
    }
}
veHinh(4, (i, j) => i >= j);
// veHinh(5, (i, j, n) => i + j <= n + 1);
// veHinh(7, (i, j, n) => {
//     const trungTam = (n + 1) / 2;
//     const kqX = Math.abs(j - trungTam);
//     const kqY = Math.abs(i - trungTam);
//     return kqX + kqY < trungTam
// });
