class Square {
    #side;
    static #count = 0;

    constructor(side) {
        if (side <= 0) {
            throw new Error("Side length must be positive");
        }

        this.#side = side;
        Square.#count++;
    }

    #area() {
        return this.#side * this.#side;
    }

    get side() {
        return this.#side;
    }

    set side(value) {
        if (value <= 0) {
            throw new Error("Side length must be positive");
        }
        this.#side = value;
    }

    static get count() {
        return Square.#count;
    }
}

const square = new Square(3);
const square2 = new Square(4);

console.log(Square.count);