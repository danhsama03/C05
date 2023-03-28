import { question } from "readline-sync";

function docSo(n: number): void {
    let number1: number = Math.floor(n / 10);
    let number2: number = n % 10;
    let a: string = "";
    let b: string = "";
    switch (number1) {
        case 1:
            a = ("Mười ");
            break;
        case 2:
            a = ("Hai mươi ");
            break;
        case 3:
            a = ("Ba mươi ");
            break;
        case 4:
            a = ("Bốn mươi ");
            break;
        case 5:
            a = ("Năm mươi ");
            break;
        case 6:
            a = ("Sáu mươi ");
            break;
        case 7:
            a = ("Bảy mươi ");
            break;
        case 8:
            a = ("Tám mươi ");
            break;
        case 9:
            a = ("Chín mươi ");
            break;
    }
    switch (number2) {
        case 1:
            b = ("một");
            break;
        case 2:
            b = ("hai");
            break;
        case 3:
            b = ("ba");
            break;
        case 4:
            b = ("bốn");
            break;
        case 5:
            b = ("năm");
            break;
        case 6:
            b = ("sáu");
            break;
        case 7:
            b = ("bảy");
            break;
        case 8:
            b = ("tám");
            break;
        case 9:
            b = ("chín");
            break;
    };
    console.log(a + b);
};


function cnDocSo(): void {
    let n: number = 0;
    do {
        n = Number(question("Nhap so nguyen: "));
    } while (n < 10 || n > 99)
	docSo(n);
};

cnDocSo();

export {}