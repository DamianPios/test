import {linearSearch} from "./linear-search";

describe('Linear search', () => {
    it('should return index for found element', () =>{
        expect(linearSearch<number>([1, 2, 2, 2, 3, 3, 4, 4], 3)).toBe(4);
    });

    it('should return undefined if element absent', () => {
       expect(linearSearch([1, 2, 3, 4, 5], -1)).toBeUndefined();
    });

    it('should find index of object', () => {
        class Foo {
            constructor(readonly id: number) { }
        }
        expect(linearSearch([new Foo(0), new Foo(1), new Foo(2)], new Foo(1))).toBe(2);
    });
});
