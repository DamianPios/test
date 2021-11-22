import {leaveDuplicates} from "./leave-duplicates";
import {Element} from "./model/element";

describe('Leave duplicates', () => {
    it('should return array without uniq values', () => {
        const listA: Element<string>[] = [];
        const listB: Element<string>[] = [];
        listA.push(new Element<string>(0, 'test'), new Element<string>(1, 'foo'), new Element<string>(2, 'bar'));
        listB.push(new Element<string>(0, 'test'), new Element<string>(2, 'bar'), new Element<string>(3, 'foobar'));
        let duplicatedValues = leaveDuplicates(listA, listB);

        expect(duplicatedValues.length).toBe(2);
        expect(duplicatedValues.every(elA => listB.find(elB => elB.key === elA.key))).toBeTruthy();
    });
});
