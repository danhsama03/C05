import { question } from "readline-sync";

/**
 * Hàm kiểm tra năm nhuận
 * @param n Số năm
 */
function kiemTraNamNhuan(n: number): void {
    if (n % 4 == 0 &&  n % 100 != 0 || n % 400 == 0) {
        console.log("Yes");
    } else {
        console.log("No");
    };
};

/**
 * Hàm chức năng nhập năm và kiểm tra có phải năm nhuận
 */
function cnKiemTraNamNhuan(): void {
    let n: number = 0;
    do {
        n = Number(question("Nhap nam: "));
    } while (n < 0)
	kiemTraNamNhuan(n);
};

cnKiemTraNamNhuan();

export {}