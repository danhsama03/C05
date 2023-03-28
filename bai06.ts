import { question } from "readline-sync";

function kiemTraSoChinhPhuong(m: number, n: number): void {
    for (let i: number = m; i <= n; i++) {
        if (Math.sqrt(i) % 1 == 0){
            console.log(i);
            break;
        };
    };
};


function cnKiemTraSoChinhPhuong(): void {
    let m: number = Number(question("Nhap m: "));
    let n: number = Number(question("Nhap n: "));
	kiemTraSoChinhPhuong(m, n);
};

cnKiemTraSoChinhPhuong();

export {}