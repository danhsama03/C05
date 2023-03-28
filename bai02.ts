import { question } from "readline-sync";


function tinhTien(soLuong: number, donGia: number): number {
    const tien: number = soLuong * donGia;
	console.log("Tien phai tra:  " + tien);
    tinhThue(tien);
    return tien;
};

function tinhThue(tien: number): number {
    const thue: number = 0.1 * tien;
	console.log("Thue gia tri gia tang: " + thue);
    return thue;
};


function cnTinhTienVaThue(): void {
	let soLuong: number = Number(question("Nhap so luong: "));
	let donGia: number = Number(question("Nhap don gia: "));
    tinhTien(soLuong, donGia);
}

cnTinhTienVaThue();

export {}