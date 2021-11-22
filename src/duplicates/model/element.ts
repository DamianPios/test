export class Element<T = any> {
    private readonly _key: number;
    private readonly _value: T;

    constructor(key: number, value: T) {
        this._key = key;
        this._value = value;
    }

    get key() {
        return this._key;
    }

    get value() {
        return this._value;
    }
}
