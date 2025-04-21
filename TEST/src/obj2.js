class Student {
    constructor(이름, 국어, 영어, 수학, 과학) {
        this.이름 = 이름;
        this.국어 = 국어;
        this.영어 = 영어;
        this.수학 = 수학;
        this.과학 = 과학;
    }

    getSum() {
        return this.국어 + this.영어 + this.수학 + this.과학;
    }

    getAvg() {
        return this.getSum() / 4;
    }

    toString() {
        return `${this.이름}\t${this.getSum()}\t${this.getAvg()}`;
    }
}


const student = new Student();

const students = [
    new Student('홍길동', 100, 90, 80, 70),
    new Student('김철수', 90, 80, 70, 60),
    new Student('이영희', 80, 70, 60, 50),
    new Student('박민수', 70, 60, 50, 40),
    new Student('최지우', 60, 50, 40, 30),
]


console.log(students[0].toString());
