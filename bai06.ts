import { question } from "readline-sync";

/**
 * Hàm thực hiện in ra số chính phương đầu tiên trong khoảng m, n
 * @param m Khoảng đầu tiên
 * @param n Khoảng kết thúc
 */
function kiemTraSoChinhPhuong(m: number, n: number): void {
    for (let i: number = m; i <= n; i++) {
        if (Math.sqrt(i) % 1 == 0){
            console.log(i);
            break;
        };
    };
};

/**
 * Hàm chức năng nhập khoảng m, n và in ra số chính phương đầu tiên trong khoảng
 */
function cnKiemTraSoChinhPhuong(): void {
    let m: number = Number(question("Nhap m: "));
    let n: number = Number(question("Nhap n: "));
	kiemTraSoChinhPhuong(m, n);
};

cnKiemTraSoChinhPhuong();

export {}