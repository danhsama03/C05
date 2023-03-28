import { question } from "readline-sync";


function chuViHinhTron(r: number): number {
    const C: number = r * 2 * 3.14;
	console.log("Chu vi la " + C);
    return C;
};

function dienTichHinhTron(r: number): number {
    const S: number = r * r * 3.14;
	console.log("Dien tich la " + S);
    return S;
};


function cnChuViVaDienTichHinhTron(): void {
	let r: number = Number(question("Nhap ban kinh: "));
	chuViHinhTron(r);
    dienTichHinhTron(r);
};

cnChuViVaDienTichHinhTron();

export {}