import { question } from "readline-sync";

function kiemTraNamNhuan(n: number): void {
    if (n % 4 == 0 &&  n % 100 != 0 || n % 400 == 0) {
        console.log("Yes");
    } else {
        console.log("No");
    };
};


function cnKiemTraNamNhuan(): void {
    let n: number = 0;
    do {
        n = Number(question("Nhap nam: "));
    } while (n < 0)
	kiemTraNamNhuan(n);
};

cnKiemTraNamNhuan();

export {}