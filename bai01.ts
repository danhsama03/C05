import { question } from "readline-sync";

/**
 * Hàm tính chu vi hình tròn   
 * @param r Bán kính hình tròn
 * @returns Chu vi hình tròn
 */
function chuViHinhTron(r: number): number {
    const C: number = r * 2 * 3.14;
	console.log("Chu vi la " + C);
    return C;
};

/**
 * Hàm tính diện tích hình tròn
 * @param r Bán kính hình tròn
 * @returns Trả về diện tích hình tròn
 */
function dienTichHinhTron(r: number): number {
    const S: number = r * r * 3.14;
	console.log("Dien tich la " + S);
    return S;
};

/**
 * Hàm chức năng nhập bán kính và tính chu vi, diện tích hình tròn
 */
function cnChuViVaDienTichHinhTron(): void {
	let r: number = Number(question("Nhap ban kinh: "));
	chuViHinhTron(r);
    dienTichHinhTron(r);
};

cnChuViVaDienTichHinhTron();

export {}