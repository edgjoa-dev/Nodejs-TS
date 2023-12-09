import { buildMakePerson } from '../../src/js-foundation/05-factory';


describe('Test for 05-factory archive', () => {

    const getUUID = () => 'asdf321';
    const getAge =  ()=> 32;

    test('buildMakePerson should return a function', () => {

        const makePerson = buildMakePerson( { getUUID, getAge } )
        expect(typeof makePerson).toBe('function');
    });

    test('buildMakePerson should return a person object', () => {
        const makePerson = buildMakePerson( { getUUID, getAge } )
        const person = makePerson({ name: 'John Doe', birthdate: '1985-10-21' })
        console.log(person);

        expect(person.id).toBe('asdf321');
        expect(person.name).toBe('John Doe');
        expect(person.birthdate).toBe('1985-10-21');
        expect(person.age).toBe(32);

    });
});