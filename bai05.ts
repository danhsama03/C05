import { question } from "readline-sync";

function kiemTraSoHoanThien(n: number): void {
    let S: number = 0;
    for (let i: number = 1; i < n; i++) {
        if (n % i == 0) {
            S += i;
        };
    };
    if (S == n) {
        console.log("Yes");
    } else {
        console.log("No");
    };
};


function cnKiemTraSoHoanThien(): void {
    let n: number = 0;
    do {
        n = Number(question("Nhap so: "));
    } while (n < 0)
	kiemTraSoHoanThien(n);
};

cnKiemTraSoHoanThien();

export {}