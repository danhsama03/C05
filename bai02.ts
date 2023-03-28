import { question } from "readline-sync";

/**
 * Hàm tính tiền 
 * @param soLuong Số lượng
 * @param donGia Đơn giá
 * @returns Trả về tiền
 */
function tinhTien(soLuong: number, donGia: number): number {
    const tien: number = soLuong * donGia;
	console.log("Tien phai tra:  " + tien);
    tinhThue(tien);
    return tien;
};

/**
 * Hàm tính thuế giá trị gia tăng
 * @param tien Tiền
 * @returns Trả về thuế
 */
function tinhThue(tien: number): number {
    const thue: number = 0.1 * tien;
	console.log("Thue gia tri gia tang: " + thue);
    return thue;
};

/**
 * Hàm chức năng nhập đơn giá, số lượng và tính tiền
 */
function cnTinhTienVaThue(): void {
	let soLuong: number = Number(question("Nhap so luong: "));
	let donGia: number = Number(question("Nhap don gia: "));
    tinhTien(soLuong, donGia);
}

cnTinhTienVaThue();

export {}