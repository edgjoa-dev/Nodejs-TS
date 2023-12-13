import { getUUID } from '../../src/plugins/get-id.plugin';

describe('Test in get-id adapter plugin', () => {

    test('should return a string', () => {
        const uuid = getUUID();
        expect(typeof uuid).toBe('string');
    });

    test('should return length 36 characters', () => {
        const uuid = getUUID();
        expect(uuid.length).toBe(36);
   });

    test('should return a different string each time', () => {
        const uuid1 = getUUID();
        const uuid2 = getUUID();

        expect(uuid1).not.toBe(uuid2);

    })

    test('should return a value truhty', () => {

        const uuid = getUUID();

        expect(uuid).not.toBeNull();
        expect(uuid).not.toBeUndefined();
        expect(uuid).not.toBeNaN();

    })

});