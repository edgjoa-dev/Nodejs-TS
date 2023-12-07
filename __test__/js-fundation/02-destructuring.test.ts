import { characters } from '../../src/js-foundation/02-destructuring';

describe('Test in the 02-destructuring archive', () => {

    test('should show characters Flash & Superman', () => {

        expect(characters).toContain('Flash')
        expect(characters).toContain('Superman')

    });

    test('should show the length of characters', () => {
        expect(characters.length).toBe(4)
        expect(characters).toHaveLength(4)

    })

    test('should show the first & second character', () => {

        const [ Flash, Superman] = characters;

        expect(Flash).toBe('Flash');
        expect(Superman).toBe('Superman');

    })

});